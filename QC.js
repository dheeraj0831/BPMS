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
    if(window.location.pathname=="/QC.html"){
        getPatches();
    }
}
function reject_patch(patchname){
    //console.log(typeof(patchname))
    window.contract.methods.reject_patch(''+patchname).send({from:account})
}
function accept_patch(patchname){
    //console.log(typeof(patchname))
    window.contract.methods.accept_patch(''+patchname).send({from:account})
}
const downloadfile=async(patchname)=>{
    const fileData= await window.contract.methods.filefordownload(patchname).call();
    const fileBlob = new Blob([new Uint8Array(web3.utils.hexToBytes(fileData))], { type: 'application/octet-stream' });
	const fileUrl = URL.createObjectURL(fileBlob);
	const downloadLink = document.createElement('a');
	downloadLink.href = fileUrl;
	downloadLink.download = 'file.txt';
	downloadLink.click();
}
const getPatches= async () => {
    console.log(window);
    console.log('called');

    const patches= await window.contract.methods.getpatches_ofQC().call();
    console.log('called');
    console.log(patches);
 
    //console.log(patches[1].patchname);
    const table= document.getElementById("patchTable")
    t="<th>Sno.</th><th>Name of Patch</th><th>Bugs</th><th>Features</th>"
    for(let i=0;i<patches.length;i++){
        
        t+="<tr>";
        t+="<td>"+(i+1)+"</td>";
        //console.log(patches[i].patchname)
        t+=`<td>${patches[i].patchname}</td>`;
        t+=`<td>${patches[i].bugs}</td>`;
        t+=`<td>${patches[i].features}</td>`;
        console.log(typeof(patches[i].patchname),patches[i].patchname);
        t+=`<td><button type='button' class='btn btn-primary' onclick=downloadfile('${patches[i].patchname}')>Download</button></td>`
        t+=`<td><button type='button' class='btn btn-success' onclick=accept_patch('${patches[i].patchname}')>Accept</button></td>`
        t+=`<td><button type='button' class='btn btn-danger' onclick=reject_patch('${patches[i].patchname}')>Reject</button></td>`;
        t+="</tr>";
    }
    table.innerHTML=t;
}