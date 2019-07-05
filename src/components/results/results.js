import React from 'react'
import '../../App.css'

const Results = ({ list }) => (
  <ul className="app-result">
     {
       list.map((item, index) =>
         <li key={index}>
           <div className="name">
             { item.name } <br />
           </div>
           { item.address } <br />
           price: { item.price } <br />
           <br />
         </li>)
     }
   </ul>
)

 export default Results
