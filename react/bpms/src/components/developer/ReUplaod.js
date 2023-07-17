import React,{useContext,useState,useEffect} from 'react'
import contractContext from '../../Context';
import { Web3Storage } from 'web3.storage';
import Swal from 'sweetalert2'
export default function ReUplaod({patchname,setRejected,getPatches}) {
    let {contract} = useContext(contractContext);
    const [patch,setPatch] = useState([]);
    let [account,setAccount] = useState([])
    const handleSubmmit = async ()=>{
        const client = new Web3Storage({
          token : process.env.REACT_APP_API_TOKEN
        })
        const fileInput = document.getElementById('patchfile');
        const file = fileInput.files[0];
        const fileName = file.name;
        const fileExt = fileName.split('.').pop().toLowerCase();
    
        const metaData = {
          name : fileName,
          type : fileExt
        }
    
        const ipfsFile = new File([file],fileName,metaData);
        const cid = await client.put([ipfsFile]);
        const time = new Date();
        const transaction = await contract.methods.uplaodPatch(patchname,time.toString(),cid).send({from:account});
        setRejected("")
        Swal.fire({
          icon: 'success',
          title: 'Pacth has been uploaded',
          showConfirmButton: true
        })
        getPatches();
      }
      const getPatch = async (patchname) => {
        let temp=  await  contract.methods.getPatchDetails(patchname).call();
        setPatch(temp);
    }
    const connectMetamask = async () => {
        if (window.ethereum !== "undefined") {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
        }
      }
      useEffect( () => {
        connectMetamask();
        getPatch(patchname);
      },[patchname]);

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
    <h2>Reason for rejection:</h2>
    {patch.reason}
    </div>
    <div className='card-footer text-center'>
    <input class="btn btn-success" type="file"  id="patchfile"></input>
        <div className='text-center'>
        <button className='btn btn-success my-1' onClick={handleSubmmit} >Submit</button>
        </div>
    </div>
    
  </div>
</div>
    </div>
  )
}
