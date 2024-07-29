import { useState } from "react"
import { useNavigate,useLocation } from "react-router-dom"
function Masjid(){
    const location = useLocation()
    const { formatteddate } = location.state
    
//masjid name and amount store
const [name,setname]=useState('')
const masjidname = (evt)=>{
    setname(evt.target.value)
}

const [amount,setamount]=useState('')
const masjidamount = (evt)=>{
    setamount(evt.target.value)
}

//turn to print stage
const navigate = useNavigate()
const handlePrint = () => {
    if(amount==='' || name===''){
        alert("Please Enter Name and Amount")
    }
    else{
    navigate('/print', { state: { name, amount, date: formatteddate } });
}
};

    return( <div className="billingMasjid">

        <div className="date">
          <p>MM/DD/YYYY</p>
          <p>Date: {formatteddate}</p>
          </div>

          <div className="persondetails">
              
             <table>
             <th colSpan={2}>
              <h2>السَّلَامُ عَلَيْكُمْ👋</h2>
              <p>Please Enter Donar Name and Amount!</p>
              </th>
             <tr>
              <td><span>Name:</span></td>
              <td><input type="text" placeholder="Donar Name" required value={name} onChange={masjidname}/></td>
              </tr>
              <tr>
              <td><span>Amount:</span></td>
              <td><input type="number" placeholder="Amount" required value={amount} onChange={masjidamount}/></td>
              </tr>
  
              </table>
              <button onClick={handlePrint}>Go to Print Page</button>
          </div>

      </div> 
      )
}

export default Masjid