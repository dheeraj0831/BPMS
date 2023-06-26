import React from 'react'

export default function UserNavbar() {
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
          <a className="nav-link active" aria-current="page" href="#">Request Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Report Bugs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Download Patches</a>
        </li>
      </ul>
      <a className="nav-link active" aria-current="page" href="#">LogOut</a>
    </div>
  </div>
  {/* moved logout outside the div but inside the nav so that the log out is on the topright but this is coming outside the toggler in phone orientation*/}
  {/* <a className="nav-link active" aria-current="page" href="#">LogOut</a> */}
</nav>
    </div>
  )
}
