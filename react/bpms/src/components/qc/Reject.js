import React from 'react'
import { useEffect,useContext,useState}from 'react'
import contractContext from '../../Context';
import Swal from 'sweetalert2'
export default function Reject({patchname,setRejected,fetchPatches}) {
  let {contract} = useContext(contractContext);
  let [account,setAccount] = useState([])
  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
    }
  }
  useEffect( () => {
    connectMetamask();
  },[]);
  

  const handleSubmmit = async ()=>{
    let reason = document.getElementById('reason').value
    const transaction = await contract.methods.rejectPatch(patchname,reason).send({from:account});
    setRejected("");
    Swal.fire({
      icon: 'success',
      title: 'Pacth has been rejected',
      showConfirmButton: true
    })
    fetchPatches();

  }
  return (
    <div className='container text-center'>
      <label  className="form-label">Reason for rejection:</label>
      <input type="text" className="form-control" id="reason"></input>
      <button className='btn btn-success my-3' onClick={handleSubmmit}>Submit</button>
    </div>
  )
}
