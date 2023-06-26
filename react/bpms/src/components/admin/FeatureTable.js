import React,{ useState,useEffect, useContext }  from 'react'
import features from './features.json'
import Web3 from 'web3'
import contractContext from '../../Context';
import bugs from './bugs.json'
export default function FeatureTable() {
  const [featureheads,setFeaturheads]=useState(Object.keys(features[0]));
  const [bugheads,setBugheads]=useState(Object.keys(bugs[0]));
  bugs=bugs.filter(bugs=>bugs.flag===0)
  features=features.filter(features=>features.flag===0)
  let {contract} = useContext(contractContext);
  
  const [hash,setHash]=useState("");
  useEffect(()=>{
    connectMetamask();
  },[]);
  let account;
  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        //alert(`account is ${account}`);
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
    //(string[] memory _bugs,string[] memory _features,string memory _patchname,uint8 _team) 
    let team=document.getElementById("team").value
    console.log(team+"this is the team")
    let bugarr=getData("bug");
    let featurearr=getData("feature");
    console.log(bugarr);
    console.log(featurearr);
    let patchname=document.getElementById("patchname").value;
    let transaction = await contract.methods.addpatch(bugarr,featurearr,`${patchname}`,team).send({from:account});
    setHash(transaction.transactionHash);
}
    const DisplayData= (arr,heads,type)=>(
            arr.map(
            (info)=>{
            let arrname=`form-check-input ${type}`
            return(
                <tr>
                    <td>{info[heads[0]]}</td>
                    <td>{info[heads[1]]}</td>
                    <td>{info[heads[2]]}</td>
                    {/* <td><input className={"form-check-input" + arr} type="checkbox"  id={info[arr[0]]} /> */}
                    <td><input className={arrname} type="checkbox"  value={info[heads[0]]} />
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
          <td>{bugheads[0]}</td>
          <td>{bugheads[1]}</td>
          <td>{bugheads[2]}</td>
          </tr>
        </thead>
        <tbody id="body">
          {DisplayData(bugs,bugheads,"bug")}
        </tbody>
      </table>

      <table className='table table-hover'>
        <thead>
          <tr id="head">
          <td>{featureheads[0]}</td>
          <td>{featureheads[1]}</td>
          <td>{featureheads[2]}</td>
          </tr>
        </thead>
        <tbody id="body">
          {DisplayData(features,featureheads,"feature")}
        </tbody>
      </table>
      {/* <div className='text-center'> */}
      <label htmlFor='patchname'className='form-label'>PatchName:</label>
      <input className="form-control my-5"placeholder='Patchname' id='patchname'></input>
      {/* what is aria-label */}
      {/* style="width: 20%;" */}
      <select className="form-select" id="team">
            <option disabled>Select Team</option>
            <option value="0">Team1</option>
            <option value="1">Team2</option>
            <option value="2">Team3</option>
            <option value="3">Team4</option>
            <option value="4">Team5</option>
      </select>
      
      {/* </div> */}
      <div className='text-center'>
      <button className='btn btn-success my-5' onClick={submit} >Submit</button>
            {hash}
      </div>
    </div>
  )
}