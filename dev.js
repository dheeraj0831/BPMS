const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        // document.getElementById("accountArea").innerHTML = `Account is: ${account}`;
        //alert(`Account is: ${account}`)
    }
}

const connectContract = async () => {
    const ABI=[
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "patch_name",
                    "type": "string"
                }
            ],
            "name": "accept_patch",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_team",
                    "type": "string"
                },
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
                }
            ],
            "name": "filefordownload",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "get_ready_patches",
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
                            "internalType": "enum placeholder.Status",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct placeholder.patch[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
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
            "name": "getpatch",
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
                            "internalType": "enum placeholder.Status",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct placeholder.patch",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getpatches_ofQC",
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
                            "internalType": "enum placeholder.Status",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct placeholder.patch[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getpatches_ofteam1",
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
                            "internalType": "enum placeholder.Status",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct placeholder.patch[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getpatches_ofteam2",
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
                            "internalType": "enum placeholder.Status",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct placeholder.patch[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "patchname",
                    "type": "string"
                },
                {
                    "internalType": "bytes",
                    "name": "patchfile",
                    "type": "bytes"
                }
            ],
            "name": "getpatchfile",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getrejected_of_team1",
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
                            "internalType": "enum placeholder.Status",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct placeholder.patch[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "patchcount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "patchfiles",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "patch_name",
                    "type": "string"
                }
            ],
            "name": "reject_patch",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "patch_name",
                    "type": "string"
                }
            ],
            "name": "verify",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];
    const address="0x740616D9FBf86D465065b807bfEa6d6b877C52D4";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, address);
    //alert('contractconnected')
    //console.log(window.location);
    //this if is to make onload work for getpatches 
    if(window.location.pathname=="/dev.html"){
        getPatches();
    }
}
const getPatches= async () => {
    console.log(window);
    const patches= await window.contract.methods.getpatches_ofteam1().call();
    const table= document.getElementById("patchTable")
    t="<th>Sno.</th><th>Name of Patch</th><th>Bugs</th><th>Features</th>"
    for(let i=0;i<patches.length;i++){
        t+="<tr>";
        t+="<td>"+(i+1)+"</td>";
        t+=`<td><a href='patch_details.html?pathchid=${patches[i].patchname}'>${patches[i].patchname}</a></td>`;
        t+=`<td>${patches[i].bugs}</td>`;
        t+=`<td>${patches[i].features}</td>`;
        t+="</tr>";
    }
    table.innerHTML=t;



    // rejected table
    const table1= document.getElementById("rejected")
    const rejected_patches= await window.contract.methods.getrejected_of_team1().call()
    console.log(rejected_patches);
    t1="<th>Sno.</th><th>Name of Patch</th><th>Bugs</th><th>Features</th>"
    for(let i=0;i<rejected_patches.length;i++){
        console.log("iteration "+i);console.log(rejected_patches);
        t1+="<tr>";
        t1+="<td>"+(i+1)+"</td>";
        t1+=`<td><a href='patch_details.html?pathchid=${rejected_patches[i].patchname}'>${rejected_patches[i].patchname}</a></td>`;
        t1+=`<td>${rejected_patches[i].bugs}</td>`;
        t1+=`<td>${rejected_patches[i].features}</td>`;
        t1+="</tr>";
    }
    table1.innerHTML=t1;
    
}





















// var subscription = web3.eth.subscribe('logs', {
//     address: '',
//     topics: ['']
// }, function(error, result){
//     if (!error)
//         console.log(result);
// });