import React from 'react';
import data from './data.json';
import profileIcon from './3.jpg';
import profileIcon1 from './2.png';

let Resume=(prop)=>{
  let info=data.profiles[prop.location.data.id];
  return(
     <div className="row justify-content-center">
         {/*Left part */}
           <div className="col-lg-3 m-2">
               <div className="card shadow">
                    <div className="card-body p-2 text-center">
                        {info.basics.gender==="male"? <img src={profileIcon} 
                        alt="Profile icon" style={{width:"30%"}}/> :<img src={profileIcon1} 
                        alt="Profile icon1" style={{width:"30%"}}/>}
                        <h2>{info.basics.name}</h2>
                       <h5 className="text-secondary" style={{fontstyle:"italic"}}> 
                         {info.basics.role}</h5> <hr/>
                        <a href={"mailto:"+info.basics.email}> {info.basics.email}</a> <br>
                         </br>
                        <a href={"tel:"+info.basics.mobile}> {info.basics.mobile}</a> <br />

                        <p>{info.basics.address} </p> 

                    </div>
               </div>
            </div>

           {/*Right part */}
            <div  className="col-lg-6 m-2">
            <div className="card shadow">
            <div className="card-body p-2">
                        <h3> summery </h3> <hr />
                        <ul>
                            {info.summery.map((summeryValue,summeryIndex)=>(
                              <li key={summeryIndex}> {summeryValue}</li>
                               ))}
                        </ul>
                        <h3> Educational Qualifications </h3> <hr />
                        <div  className="table-responsive">
                        <table className="table table-bordered">
                               <thead className="thead-dark">
                                   <tr>
                                       <th> Degree </th>
                                       <th> Institute </th>
                                       <th> Percentage </th>
                                     </tr>
                                </thead>
                                <tbody>
                                 {info.education.map((educationValue,educationIndex)=>(

                                          <tr key={educationIndex}>
                                             <td> {educationValue.degree} </td>
                                             <td> {educationValue.institute} </td>
                                             <td> {educationValue.result} </td>
                                          </tr>
                                  ))}
                                </tbody>
                       
                        </table>
                        </div>
            </div>
            </div>
            </div>
    </div>
  )
}
export default Resume;