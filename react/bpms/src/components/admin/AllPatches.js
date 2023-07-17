import { React ,useState,useEffect, useContext }  from 'react'
import contractContext from '../../Context';
export default function AllPatches() {
  let {contract} = useContext(contractContext);
  const [patches,setPatches] = useState([])
  const fetchPatches = async () =>{
    let patch = await contract.methods.getPatches().call();
    //console.log(patch);
    setPatches(patch);
  }
  useEffect(()=>{
    fetchPatches();
    },[]);
    // need to see why team and status not coming this is due to ENUM in solidity prolly
  return (
    <div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>PatchName</td>
            <td>Bugs</td>
            <td>Features</td>
            <td>Team</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {patches &&
          patches.map((val,index)=>{
            // console.log(val.status)
            return (
              <tr>
                <td>{val.patchname}</td>
                <td>{val.bugs}</td>
                <td>{val.features}</td>
                <td>{val.team}</td>
                <td>{val.status}</td>
              </tr>
            )
          }
          )
          }
        </tbody>
      </table>
    </div>
  )
}
