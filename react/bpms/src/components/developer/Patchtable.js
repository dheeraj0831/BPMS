import React,{ useEffect,useContext, useState}from 'react'
import contractContext from '../../Context';
export default function Patchtable() {
    let {contract} = useContext(contractContext);
    const [patch,setPatch]=useState([])
    const getPatches = async () => {
        let patches=  await contract.methods.getPatches().call();
        patches.filter(patches=>patches.Status===0);
        setPatch(patches);
        console.log(patch,"table");

}

    useEffect(()=>{
        connectMetamask();
        getPatches();
      },[]);
    

    let account;
    
    const connectMetamask = async () => {
      if (window.ethereum !== "undefined") {
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          account = accounts[0];
          //alert(`account is ${account}`);
      }

  }
  return (
    <div>
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
            </tr>
        )
    })}
      </tbody>
      </table>
    </div>
  )
}
