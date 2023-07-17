import React from 'react'
import Swal from 'sweetalert2'
export default function Features() {
  const handleClick= async ()   =>{
    let featureid=document.getElementById("featureid").value
    let featuredescription=document.getElementById("featuredescription").value
    const data={
      featureid:featureid,
      featureDesc:featuredescription,
      priority:-1,
      flag:true
    }
    // console.log(data);
    const response = await fetch(`${process.env.REACT_APP_SERVER_LINK}Request`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if(response.ok){
      console.log(response)
    }
    document.getElementById('feature').reset();
    Swal.fire({
      icon: 'success',
      title: 'Feature has been requested',
      showConfirmButton: true
    })
  }
  return (
    <>
    <form id='feature'>
    <div className="mb-3">
    <label  className="form-label">Enter Feature</label>
    <input type="text" className="form-control" id="featureid"></input>
    </div>
    <div className="mb-3">
    <label  className="form-label">Enter Feature Description</label>
    <textarea className="form-control" id="featuredescription" rows="3"></textarea>
    </div>
    <div className="col-auto text-center">
    <button type="button" className="btn btn-primary mb-3" onClick={handleClick}>Submit</button>
    </div>
    </form>
    </>
  )
}
