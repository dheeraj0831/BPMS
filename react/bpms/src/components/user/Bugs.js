import React from 'react'
import Swal from 'sweetalert2'
export default function Bugs() {

const handleClick= async ()   =>{

    let bugid=document.getElementById("bugid").value
    let bugdescription=document.getElementById("bugdescription").value
    const data={
      bugid:bugid,
      bugDesc:bugdescription,
      priority:-1,
      flag:true
    }
    const response = await fetch(`${process.env.REACT_APP_SERVER_LINK}Report`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if(response.ok){
      console.log(response);
    }
    document.getElementById('bug').reset();
    Swal.fire({
      icon: 'success',
      title: 'Bug has been reported',
      showConfirmButton: true
    })

}


  return (
    <>
    <form id="bug">
    <div className="mb-3">
    <label  className="form-label">Enter Bug</label>
    <input type="text" className="form-control" id="bugid"></input>
    </div>
    <div className="mb-3">
    <label  className="form-label">Enter Bug Description</label>
    <textarea className="form-control" id="bugdescription" rows="3"></textarea>
    </div>
    <div className="col-auto text-center">
    <button type="button" className="btn btn-primary mb-3" onClick={handleClick}>Submit</button>
    </div>
    </form>
    </>
  )
}
