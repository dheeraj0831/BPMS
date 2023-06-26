import React from 'react'

export default function Bugs() {

const handleClick=()=>{
    let bugid=document.getElementById("bugid").value
    let bugdescription=document.getElementById("bugdescription").value
    console.log(bugid,bugdescription);
}


  return (
    <>
    <div className="mb-3">
    <label  className="form-label">Enter BugID</label>
    <input type="email" className="form-control" id="bugid"></input>
    </div>
    <div className="mb-3">
    <label  className="form-label">Enter Bug Description</label>
    <textarea className="form-control" id="bugdescription" rows="3"></textarea>
    </div>
    <div className="col-auto text-center">
    <button type="submit" className="btn btn-primary mb-3" onClick={handleClick}>Submit</button>
    </div>
    </>
  )
}
