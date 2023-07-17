import { React,useState,useEffect} from 'react';
import Swal from 'sweetalert2'
export default function Priority({type}) {
    let uri=`${process.env.REACT_APP_SERVER_LINK}${type}`;
    const [data,setData] = useState([])
    const [heads,setHeads] = useState([])
    const fetchs =  async ()=>{
        const response = await fetch(uri);
        if(response.ok){
          let responseData = await response.json();
          responseData = responseData.filter(val=>val.priority==-1)
          setData(responseData);
          setHeads(Object.keys(responseData[0]));
        }
      }
    const handleSubmit = async  ()=>{
        let report = data.map(
          (info)=>{
          let alpha = document.getElementById(info[heads[1]])
          return {[info[heads[1]]] : alpha.value };
          }
        )
        report = report.filter(val=>(Object.values(val))!='Select Priority')
        report.push(type);
        const response = await fetch(`${process.env.REACT_APP_SERVER_LINK}Priority`,{
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(report)
          })
          const items = document.getElementsByClassName("nice")
          for(let i=0;i<items.length;i++){
            items[i].reset();
          }
          Swal.fire({
            icon: 'success',
            title: 'Priority has been set',
            showConfirmButton: true
          })
          fetchs();
        }

      useEffect(()=>{
        fetchs();
        },[type]);
        const DisplayData = (arr) =>(
        arr.map(
            (info)=>{
            return(
            <tr>
                <td>{info[heads[1]]}</td>
                <td>{info[heads[2]]}</td>
                <td>
                <form className ="nice">
                <select className="form-select" id={info[heads[1]]}>
                    <option selected hidden>Select Priority</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                </form>
                </td>
            </tr>
            )
        }
        )
  )
  return (
    <div>
      <table className='table table-hover'>
        <thead>
            <tr>
                <td>{heads[1]}</td>
                <td>{heads[2]}</td>
                <td>Set Priority</td>
            </tr>
        </thead>
        <tbody id="body">
          {DisplayData(data)}
        </tbody>
      </table>
      <div className='text-center'>
      <button className='btn btn-success my-5' onClick={handleSubmit} >Submit</button>
      </div>
    </div>
  )
}
