import { useState,useEffect } from 'react'
import React from 'react'
import features from './features.json'
import Web3 from 'web3'
export default function FeatureTable() {
  const [heads,setHeads]=useState(Object.keys(features[0]));
  useEffect(()=>{
    let button = document.createElement("button");
    button.className="btn btn-success"
    button.textContent="Submit"
    document.getElementById("mainDiv").appendChild(button);
    connectContract();
    connectMetamask();
  },[]);
  let account;
  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        alert(`account is ${account}`);
    }
}
    const connectContract = async () => {
    const ABI=[
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_patchname",
                    "type": "string"
                }
            ],
            "name": "acceptPatch",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string[]",
                    "name": "_bugs",
                    "type": "string[]"
                },
                {
                    "internalType": "string[]",
                    "name": "_features",
                    "type": "string[]"
                },
                {
                    "internalType": "string",
                    "name": "_patchname",
                    "type": "string"
                },
                {
                    "internalType": "uint8",
                    "name": "_team",
                    "type": "uint8"
                }
            ],
            "name": "addpatch",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_patchname",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_reason",
                    "type": "string"
                }
            ],
            "name": "rejectPatch",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_patchname",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_patchUplaodTime",
                    "type": "string"
                }
            ],
            "name": "uplaodPatch",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_patchname",
                    "type": "string"
                }
            ],
            "name": "getPatchDetails",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string[]",
                            "name": "bugs",
                            "type": "string[]"
                        },
                        {
                            "internalType": "string[]",
                            "name": "features",
                            "type": "string[]"
                        },
                        {
                            "internalType": "string",
                            "name": "patchname",
                            "type": "string"
                        },
                        {
                            "internalType": "enum bpms.Status",
                            "name": "status",
                            "type": "uint8"
                        },
                        {
                            "internalType": "enum bpms.Team",
                            "name": "team",
                            "type": "uint8"
                        },
                        {
                            "internalType": "string",
                            "name": "patchUploadTime",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "reason",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct bpms.patch",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "Patches",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "patchname",
                    "type": "string"
                },
                {
                    "internalType": "enum bpms.Status",
                    "name": "status",
                    "type": "uint8"
                },
                {
                    "internalType": "enum bpms.Team",
                    "name": "team",
                    "type": "uint8"
                },
                {
                    "internalType": "string",
                    "name": "patchUploadTime",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "reason",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const address="0xE7A7a30Dce4F682A7dFef2D9ce4c22930e217293";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, address);
    alert("contract connected");
}

const submit =async()=>{
    //(string[] memory _bugs,string[] memory _features,string memory _patchname,uint8 _team) 
    await window.contract.methods.addPatch(["bug1"],["feature"],"patch1",0).send({from:account});
   
}
    const DisplayData=features.map(
        (info)=>{
            return(
                <tr>
                    <td>{info[heads[0]]}</td>
                    <td>{info[heads[1]]}</td>
                    <td>{info[heads[2]]}</td>
                    <td><input className="form-check-input" type="checkbox" value={info.featureid} id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault" /></td>
                </tr>
            )
        }
    )


  return (
    <div id="mainDiv">
      <table className='table table-hover'>
        <thead>
          <tr id="head">
          <td>{heads[0]}</td>
          <td>{heads[1]}</td>
          <td>{heads[2]}</td>
          </tr>
        </thead>
        <tbody id="body">
          {DisplayData}
        </tbody>
      </table>
    </div>
  )
}