import React,{ useEffect,useContext, useState}from 'react'
import contractContext from '../../Context';
import ReUplaod from './ReUplaod';

export default function Rejectedtable() {
  let {contract} = useContext(contractContext);
  const [patch,setPatch]=useState([])
  const [account,setAccount] = useState([])
  const [rejected,setRejected] = useState("")
  const getPatches = async () => {
    let patches=  await contract.methods.getPatches().call();
    patches = patches.filter(patches=>patches.status == 3);
    setPatch(patches);
}

useEffect(()=>{
  getPatches();
},[]);

  return (
    <>
      <h1>Rejected table</h1>
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
                <td><button className='btn btn-success' onClick={()=>setRejected(info.patchname)}>View</button></td>
            </tr>
        )
    })}
      </tbody>
      </table>
      </div>
      {rejected && <ReUplaod patchname={rejected} setRejected ={setRejected} getPatches={getPatches}/>}
  </>
  )
}
