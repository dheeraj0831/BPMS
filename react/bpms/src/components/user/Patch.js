import { React, useState, useEffect, useContext } from 'react'
import { Web3Storage } from 'web3.storage';
import contractContext from '../../Context';
export default function Patch() {
  let { contract } = useContext(contractContext);
  const [patches, setPatches] = useState([]);
  let [account,setAccount] = useState([])
  const fetchPatches = async () => {
    let patch = await contract.methods.getPatches().call();
    patch = patch.filter(val => val.status == 2);
    setPatches(patch);
  }
  const client = new Web3Storage({
    token: process.env.REACT_APP_API_TOKEN
  })
  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
    }
  }
  useEffect(() => {
    // connectMetamask();
    fetchPatches();
  }, []);
  const getUrl = async (val) => {
    const res = await client.get(val.cid)
    const files = await res.files()
    const file = files[0];
    const url = URL.createObjectURL(file);
    const link =document.createElement('a');
    link.download=val.patchname;
    link.href=url;
    link.click();
    URL.revokeObjectURL(url);
  }
  return (
    <>
      <h5>Download Patches</h5>
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>Patch Name</td>
            <td>Bugs</td>
            <td>Features</td>
          </tr>
        </thead>
        <tbody>
          {patches &&
            patches.map((val, index) => {
              return (
                <tr>
                  <td>{val.patchname}</td>
                  <td>{val.bugs}</td>
                  <td>{val.features}</td>
                  <td>{<button className='btn btn-info' type="button" onClick={()=>getUrl(val)}>Download</button> }</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </>
  )
}
