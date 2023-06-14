import { useState } from 'react'
import React from 'react'
import bugs from './bugs.json'

export default function BugTable() {
  const [heads,setHeads]=useState(Object.keys(bugs[0]));
    const DisplayData=bugs.map(
        (info)=>{
            return(
                <tr>
                    <td>{info[heads[0]]}</td>
                    <td>{info.bugDescription}</td>
                    <td>{info.bugPriority}</td>
                    <td><input className="form-check-input" type="checkbox" value={info.bugid} id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault" /></td>
                </tr>
            )
        }
    )




  return (
    <>
      <table className='table table-hover'>
        <thead>
          <tr id="head">
          <td>{heads[0]}</td>
          <td>{heads[1]}</td>
          <td>{heads[2]}</td>
          </tr>
        </thead>
        <tbody id="body">
          {DisplayData}
        </tbody>
      </table>
    </>
  )
}

/*
// for(let i=0;i<bugs.length;i++){
  // const data=Object.values(bugs[i])
  // console.log(data)
  // // const tbody=document.getElementById("body")
  // // const row=document.createElement('tr')
  // // row.innerHTML=`<td>${data[0]}</td><td>${data[1]}</td>`
  // // tbody.appendChild(row)
  // }
  const heads = getHeadings();
  console.log(heads.length)
  const titles = document.getElementById('head');
  // console.log(heads)
  for(let i in heads){
    const data = document.createElement('th');
    console.log(heads[i])
    data.innerHTML = heads[i];
    //titles.appendChild(data);
  }
*/