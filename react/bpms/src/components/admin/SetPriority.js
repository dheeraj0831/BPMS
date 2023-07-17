import React from 'react'
import { Link, Outlet} from 'react-router-dom';
export default function SetPriority() {

  return (
    <div>
    <ul className="nav nav-underline">
    <li className='nav-item'>
    <Link to="/SetPriority/bugs" className="nav-link">BUGS</Link>
  </li>
  <li className='nav-item'>
    <Link to="/SetPriority/features" className="nav-link">FEATURES</Link>
</li>
</ul>
    <Outlet>

    </Outlet>
    </div>
  )
}
