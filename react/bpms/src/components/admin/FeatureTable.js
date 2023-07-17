import React,{ useState,useEffect, useContext }  from 'react'
import Web3 from 'web3'
import contractContext from '../../Context';
import Swal from 'sweetalert2'
export default function FeatureTable() {
  let [bugs,setBugs] = useState([])
  let [account,setAccount] = useState([])
  let [features,setFeatures] = useState([])
  let [featureheads,setFeaturheads]=useState([]);
  let [bugheads,setBugheads]=useState([]);
  const fetchBugs = async()=>{
    const response = await fetch(`${process.env.REACT_APP_SERVER_LINK}bugs`);
    if (response.ok) {
      let responseData = await response.json();
      
      responseData = responseData.filter(val=>val.priority !== -1)
      responseData = responseData.filter(val=>val.flag==true)
      console.log(responseData);
      setBugs(responseData);
      setBugheads(Object.keys(responseData[0]));
    }
  }
  const fetchFeatures =  async ()=>{
    const response = await fetch(`${process.env.REACT_APP_SERVER_LINK}features`);
    if(response.ok){
      let responseData = await response.json();
      responseData = responseData.filter(val=>val.flag==true)
      responseData = responseData.filter(val=>val.priority !== -1)
      console.log(responseData);
      setFeatures(responseData);
      setFeaturheads(Object.keys(responseData[0]));
    }
  }


  useEffect(()=>{
  connectMetamask();
  fetchBugs();
  fetchFeatures();
  },[]);
  
  let {contract} = useContext(contractContext);
  
  const [hash,setHash]=useState("");

  
  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
    }
}
const getData=(brr)=>{
  let ans=[];
    let arr=document.getElementsByClassName(brr);
    for(let i=0;arr[i];i++){
        if(arr[i].checked){
            ans.push(arr[i].value);
        }
    }
    return ans;
}



const submit =async()=>{
    let team=document.getElementById("team").value
    let bugarr=getData("form-check-input bug");
    let featurearr=getData("form-check-input feature");    
    let patchname=document.getElementById("patchname").value;
    const transaction = await contract.methods
      .addpatch(bugarr, featurearr, `${patchname}`, team)
      .send({ from: account });
      document.getElementById('patch').reset();
      const response = await fetch(`${process.env.REACT_APP_SERVER_LINK}Flag`,{
        method:"POST",
        headers: {
              'Content-Type': 'application/json'
             },
        body: JSON.stringify([bugarr,featurearr])
      });
      if(response.ok){
        console.log(response);
      }
      Swal.fire({
        icon: 'success',
        title: 'Pacth has been requested',
        showConfirmButton: true
      })
      fetchBugs();
      fetchFeatures();
    // setHash(transaction.transactionHash);
}
    const DisplayData= (arr,heads,type)=>(
            arr.map(
            (info)=>{
            let arrname=`form-check-input ${type}`
            return(
                <tr>
                    <td>{info[heads[1]]}</td>
                    <td>{info[heads[2]]}</td>
                    <td>{info[heads[3]]}</td>
                    <td><input className={arrname} type="checkbox"  value={info[heads[1]]} />
                    <label className="form-check-label" htmlFor="flexCheckDefault" /></td>
                </tr>
            )
        }
    )
    )
  return (
    <div>
        <table className='table table-hover'>
        <thead>
          <tr id="head">
          
          <td>{bugheads[1]}</td>
          <td>{bugheads[2]}</td>
          <td>{bugheads[3]}</td>
          </tr>
        </thead>
        <tbody id="body">
          {DisplayData(bugs,bugheads,"bug")}
        </tbody>
      </table>

      <table className='table table-hover'>
        <thead>
          <tr id="head">
          <td>{featureheads[1]}</td>
          <td>{featureheads[2]}</td>
          <td>{featureheads[3]}</td>
          </tr>
        </thead>
        <tbody id="body">
          {DisplayData(features,featureheads,"feature")}
        </tbody>
      </table>
      <form id="patch">
        <label htmlFor='patchname'className='form-label'>PatchName:</label>
        <input className="form-control my-5"placeholder='Patchname' id='patchname'></input>
        <select className="form-select" id="team">
            <option value="" hidden>Select Team</option>
            <option value="0">Team1</option>
            <option value="1">Team2</option>
            <option value="2">Team3</option>
            <option value="3">Team4</option>
            <option value="4">Team5</option>
        </select>
      <div className='text-center'>
        <button className='btn btn-success my-5' onClick={submit} type = "button">Submit</button>
        </div>
      </form>
      
    </div>
  )
}