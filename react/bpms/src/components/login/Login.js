import React from 'react'
export default function Login({setRole,role}) {

  const handleClick= async ()=>{
  const email=document.getElementById("email").value;
  const password=document.getElementById("Password").value;
  const data={
    email:email,
    password:password,
  }
  const response = await fetch(`${process.env.REACT_APP_SERVER_LINK}login`,{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (response.ok) {
    const responseData = await response.json();
    if(responseData.role){
    setRole(`${responseData.role}`)
    }
    else{
      let wrong=document.getElementById("wrong")
      wrong.innerHTML="Wrong Credentials"
    }
  }
  
  }
  return (
    <div className='row'>
    <div className="card text-center w-25 position-absolute top-50 start-50 translate-middle">
    <div className="card-body">
      <h5>Login</h5>
      {/* <form> */}
      <label className='form-label'>Enter Email:</label>
      <input className='form-control' id='email' type='email'></input>
      <label className='form-label'>Password:</label>
      <input className='form-control' id='Password' type='password'></input>
      <p id="wrong"></p>
      <button className="btn-primary btn my-2"onClick={handleClick}>Submit</button>
      {/* </form> */}
    </div>
    </div>
    </div>
  )
}
