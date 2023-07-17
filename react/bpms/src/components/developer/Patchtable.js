import React,{ useEffect,useContext, useState}from 'react'
import contractContext from '../../Context';
import UplaodPatch from './UplaodPatch';
export default function Patchtable() {
    let {contract} = useContext(contractContext);
    const [patch,setPatch]=useState([])
    const [upload,setUpload] = useState("")
    const getPatches = async () => {
        let patches=  await contract.methods.getPatches().call();
        patches = patches.filter(patches=>patches.status == 0);
        setPatch(patches);
}

    useEffect(()=>{
        // connectMetamask();
        getPatches();
      },[]);
    

    // let account;
    // const connectMetamask = async () => {
    //   if (window.ethereum !== "undefined") {
    //       const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    //       account = accounts[0];
    //   }
    // }
  return (
    <>
      <table className='table table-hover'>
      <thead>
        <tr>
            <th>Name of the Patch</th>
            <th>Bugs</th>
            <th>feature</th>
        </tr>
      </thead>
      <tbody>
        {patch.map((info)=>{
        return(
            <tr>
                <td>{info.patchname}</td>
               
                <td>{info.bugs.toString()}</td>
                <td>{info.features.toString()}</td>
                <td><button className='btn btn-success' onClick={()=>setUpload(info.patchname)}>Upload</button></td>
            </tr>
        )
    })}
      </tbody>
      </table>
      {upload && <UplaodPatch patchname={upload} setUpload ={setUpload} getPatches={getPatches}/>}
    </>
  )
}
