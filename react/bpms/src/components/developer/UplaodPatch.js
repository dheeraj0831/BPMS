import React,{useContext,useState,useEffect} from 'react'
import contractContext from '../../Context';
export default function UplaodPatch({patchname}) {
    let {contract} = useContext(contractContext);
    const [patch,setPatch] = useState([]);
    const getPatch = async (patchname) => {
        let temp=  await  contract.methods.getPatchDetails(patchname).call();
        setPatch(temp);
    }

    useEffect( () => {
        getPatch(`${patchname}`);
      }, []);
      
  return (
    <div className='row'>
    <div className="card col-6 container">
  <div className="card-header text-center">
    <h5>Patch Details</h5>
  </div>
  <div className="card-body">
    <h5 className="card-title text-center">{patch.patchname}</h5> 
    <div className='row'>
    <ul className='col'>
    <h5>Bugs</h5>
      {   
          patch.bugs && patch.bugs.map((val,i)=>{
          return <li key={i}>{val}</li>
        })
      }
    </ul>
    <ul className='col'>
      <h5>Features</h5>
      {   
          patch.features && patch.features.map((val,i)=>{
          return <li key={i}>{val}</li>
        })
      }
    </ul>
    </div>
    <div className='card-footer text-center'>
    <input class="btn btn-success" type="file"  id="patchfile"></input>
    </div>
  </div>
</div>
    </div>
  )
}
