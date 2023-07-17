import './App.css';
import FeatureTable from './components/admin/FeatureTable';
import AdminNavbar from './components/admin/AdminNavbar';
import Patchtable from './components/developer/Patchtable';
import DevNavbar from './components/developer/DevNavbar';
import UplaodPatch from './components/developer/UplaodPatch';
import UserNavbar from './components/user/UserNavbar';
import Bugs from './components/user/Bugs';
import Features from './components/user/Features';
import Patch from './components/user/Patch';
import Login from './components/login/Login';
import { Route,Routes,Router } from 'react-router-dom';
import {useContext,useState} from 'react'
import AllPatches from './components/admin/AllPatches';
import SetPriority from './components/admin/SetPriority';
import Priority from './components/admin/Priority';
import QcNavebar from './components/qc/QcNavebar';
import Verify from './components/qc/Verify';
import Rejectedtable from './components/developer/Rejectedtable';



function App() {
  const [role,setRole]=useState("")
  if(role==="user"){
    return(
      <>
      <UserNavbar setRole={setRole}/>
    <Routes>
        <Route path="/" element={<Bugs/>} />
        <Route path="/ReportBugs" element={<Bugs />} />
        <Route path="/RequestFeature" element={<Features />} />
        <Route path="/DownloadPatches" element={<Patch />} />
        {/* <Route path="/logout" element={<LogOut />} /> */}
    </Routes>
  </>
    )
  }
  if(role==="admin"){
    return(
      <>
      <AdminNavbar setRole={setRole}/>
      <Routes>
        <Route path='/' element={<FeatureTable />} />
        <Route path='/RegisterPatch' element={<FeatureTable />} />
        <Route path='/AllPatches' element={<AllPatches />} />
        <Route path='/SetPriority' element={<SetPriority />} >
          <Route path='' element ={<Priority type={"bugs"} />} />
          <Route path='bugs' element ={<Priority type={"bugs"} />} />
          <Route path='features' element ={<Priority type={"features"} />} />
        </Route>
      </Routes>

    </>
    )
  }
  if(role==="dev"){
    return(
      <>
    <DevNavbar setRole={setRole} />
    <Routes>
      <Route path='/' element = {<Patchtable />} />
      <Route path='/RequestedPatches' element = {<Patchtable />} />
      <Route path='/RejectedPatches' element = {<Rejectedtable />} />
    </Routes>
    </>
    )
  }
  if(role==="qc"){
    return(
      <>
      <QcNavebar setRole={setRole}/>
      <Routes>
        <Route path='/' element={<Verify />}/>
        <Route path='/Verify' element={<Verify />}>
          {/* <Route path='bugs' element ={<Priority type={"bugs"} />} /> */}
        </Route>
      </Routes>
      </>
    )
  }

  return (
    <>
    <Login setRole={setRole} role={role}/>

    {/* <Router> */}
    {/* <AdminNavbar />
    <FeatureTable /> */}


    {/* <DevNavbar />
    <Patchtable />
    <UplaodPatch patchname={"patch2"}/> */}




{/* 
    <UserNavbar />
    <Bugs />
    <Features /> */}
    {/* </Router> */}
    </>
  );
}

export default App;
