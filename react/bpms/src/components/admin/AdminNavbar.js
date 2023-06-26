import React from 'react'

export default function AdminNavbar() {
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
          <a class="nav-link active" aria-current="page" href="#">Register Patch</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">All Patches</a>
        </li>
      </ul>
      <a className="nav-link active" aria-current="page" href="#">LogOut</a>
    </div>
  </div>
  {/* moved logout outside the div but inside the nav so that the log out is on the topright but this is coming outside the toggler in phone orientation*/}
  {/* <a className="nav-link active" aria-current="page" href="#">LogOut</a> */}
</nav>
    </>
  )
}
