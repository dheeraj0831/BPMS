// const queryString = window.location.search;
//         const urlParams = new URLSearchParams(queryString);
//         const patchid = urlParams.get('patchid')
//         console.log(patchid);
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
    if(window.location.pathname=="/patch_details.html"){
        getPatches();
    }
}

const queryString=window.location.search;
console.log(queryString);
const urlParams =new URLSearchParams(queryString);
console.log(urlParams);
const patchid = urlParams.get('pathchid');
console.log(patchid);
//const patches= await window.contract.methods.getpatch(patchid).call();

const getPatches= async () => {
    //console.log(window);
    const patches= await window.contract.methods.getpatch(patchid).call();
    console.log(patches);
    
    const name=document.getElementById("patchname")
    t1=patches.patchname;
    name.innerHTML=t1;
    const bugs=document.getElementById("bugs")
    t2=patches.bugs
    bugs.innerHTML=t2
    const features=document.getElementById("features")
    t3=patches.features
    features.innerHTML=t3
}

function convertFileToString() {
    const fileInput = document.getElementById("patchfile");
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = async () =>{
    const fileData = new Uint8Array(reader.result);
    await window.contract.methods.getpatchfile(patchid,fileData).send({from:account});
    const patch= await window.contract.methods.getpatch(patchid).call();
    console.log(patch);
    await  window.contract.methods.verify(patch.patchname).send({from:account});
  }
}
















// const submit = async ()=>{
//     alert('hey')
//     const fileinput= document.getElementById("patchfile")
//     const file=fileinput.files[0];
//     console.log(file);
//     const reader = new FileReader();
//     reader.readAsText(file);
//     reader.onload = async ()=> {
//         await window.contract.methods.getpatchfile(patchid,reader.result).send({from:account});
//         console.log(reader.result);
//     }
