import './App.css';
import FeatureTable from './components/admin/FeatureTable';
import AdminNavbar from './components/admin/AdminNavbar';
import Patchtable from './components/developer/Patchtable';
import DevNavbar from './components/developer/DevNavbar';
import UplaodPatch from './components/developer/UplaodPatch';
import UserNavbar from './components/user/UserNavbar';
import Bugs from './components/user/Bugs';
import Features from './components/user/Features';




function App() {
  return (
    <>
    {/* <AdminNavbar />
    <FeatureTable /> */}


    <DevNavbar />
    <Patchtable />
    <UplaodPatch patchname={"patch2"}/>



    {/* <UserNavbar />
    <Bugs />
    <Features /> */}
    </>
  );
}

export default App;
