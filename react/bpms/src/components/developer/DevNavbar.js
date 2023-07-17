import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function DevNavbar({setRole}) {
  const Navigate = useNavigate();
  const handleLogout=()=>{
    setRole("");
    Navigate("/");
  }
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">BPMS</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/RequestedPatches" className="nav-link">Requested Patches</Link>
        </li>
        <li class="nav-item">
          <Link to="/RejectedPatches" className="nav-link">Rejected Patches</Link>
        </li>
        <button className="btn btn-info text-white">Role:Developer</button>
      </ul>
      
      <button className="btn btn-primary"onClick={handleLogout}>Log Out</button>
    </div>
  </div>
</nav>
    </>
  )
}
