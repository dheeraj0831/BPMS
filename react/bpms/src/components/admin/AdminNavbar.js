import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function AdminNavbar({setRole}) {
  const Navigate = useNavigate();
  const handleLogout=()=>{
    setRole("");
    Navigate("/");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">BPMS</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/RegisterPatch" className="nav-link">Register Patch</Link>
        </li>
        <li className="nav-item">
        <Link to="/AllPatches" className="nav-link">All Patches</Link>
        </li>
        <li className="nav-item">
        <Link to="/SetPriority" className="nav-link">Set Priority</Link>
        </li>
        <button className="btn btn-info text-white">Role:Admin</button>
      </ul>
      
      <button className="btn btn-primary"onClick={handleLogout}>Log Out</button>
    </div>
  </div>
  {/* moved logout outside the div but inside the nav so that the log out is on the topright but this is coming outside the toggler in phone orientation*/}
  {/* <a className="nav-link active" aria-current="page" href="#">LogOut</a> */}
</nav>
    </>
  )
}
