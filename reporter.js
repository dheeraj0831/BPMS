const bugname = ()=>{
    let x= document.getElementById("bugname").value

    fetch("http://localhost:4000/addbug",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({bugname:x})
    })

}