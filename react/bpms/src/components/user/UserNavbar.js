import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function UserNavbar({setRole}) {
  const Navigate = useNavigate();
  const handleLogout=()=>{
    setRole("");
    Navigate("/");
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">BPMS</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/RequestFeature" className="nav-link">Request Feature</Link>
        </li>
        <li className="nav-item">
        <Link to="/ReportBugs" className="nav-link">Report Bugs</Link>
        </li>
        <li className="nav-item">
        <Link to="/DownloadPatches" className="nav-link">Download Patches</Link>
        </li>
        <button className="btn btn-info text-white">Role:User</button>
      </ul>
      <button className="btn btn-primary"onClick={handleLogout}>Log Out</button>
    </div>
  </div>
</nav>
    </div>
  )
}
