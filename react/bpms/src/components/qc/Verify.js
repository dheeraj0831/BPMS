import { React, useState, useEffect, useContext } from 'react'
import { Web3Storage } from 'web3.storage';
import contractContext from '../../Context';
import Reject from './Reject';
import Swal from 'sweetalert2'
export default function Verify() {
  let { contract } = useContext(contractContext);
  const [patches, setPatches] = useState([]);
  let [account,setAccount] = useState([]);
  const [rejected,setRejected] = useState();
  const fetchPatches = async () => {
    let patch = await contract.methods.getPatches().call();
    patch = patch.filter(val => val.status == 1);
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
    connectMetamask();
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
  const acceptPatch = async (patchname) =>{
    const transaction = await contract.methods.acceptPatch(patchname).send({from:account})
    Swal.fire({
      icon: 'success',
      title: 'Pacth has been accepted',
      showConfirmButton: true
    })
    fetchPatches();
  }

  return (
    <>
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>Patch Name</td>
            <td>Bugs</td>
            <td>Features</td>
            <td>Patch Uplaod Time</td>
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

                  <td>{val.patchUploadTime}</td>
                  <td><button className='btn btn-success' type="button" onClick={()=>acceptPatch(val.patchname)}>Accept Patch</button></td>
                  <td><button className='btn btn-danger' type="button" onClick={()=>setRejected(val.patchname)}>Reject Patch</button></td>
                  <td>{<button className='btn btn-info' type="button" onClick={()=>getUrl(val)}>Download</button> }</td>
                </tr>
              )
            })}
        </tbody>
      </table>
      {rejected && <Reject patchname={rejected} setRejected={setRejected} fetchPatches={fetchPatches}/>}
    </>
  )
}
