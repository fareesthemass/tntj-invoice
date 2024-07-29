import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
function Donation() {
    const navigate = useNavigate()
    const location = useLocation()
    const { formatteddate } = location.state

    const [name, setname] = useState('')
    const [purpose, setpurpose] = useState('')
    const [amount, setamount] = useState('')

    const handlename = (evt) => {
        setname(evt.target.value)
    }

    const handlepurpose = (evt) => {
        setpurpose(evt.target.value)
    }

    const handleamount = (evt) => {
        setamount(evt.target.value)
    }

    const handlenavigate=()=>{
        if(name==='' || purpose==='' || amount===''){
            alert('Please Enter Details')
        }
        else{
        navigate('/printdonation', {state:{name,purpose,amount,formatteddate}})
    }
    }

    return (<div className="billingMasjid">

        <div className="date">
            <p>MM/DD/YYYY</p>
            <p>Date: {formatteddate}</p>
        </div>

        <div className="persondetails">

            <table>
                <th colSpan={2}>
                    <h2>السَّلَامُ عَلَيْكُمْ👋</h2>
                    <p>Please Enter Donar Name and Details!</p>
                </th>
                <tr>
                    <td><span>Name:</span></td>
                    <td><input type="text" placeholder="Donar Name" required value={name} onChange={handlename} /></td>
                </tr>
                <tr>
                    <td><span>Purpose:</span></td>
                    <td><input type="text" placeholder="What purpose?" required value={purpose} onChange={handlepurpose} /></td>
                </tr>
                <tr>
                    <td><span>Amount:</span></td>
                    <td><input type="number" placeholder="Amount" required value={amount} onChange={handleamount} /></td>
                </tr>

            </table>
            <button onClick={handlenavigate}>Go to Print Page</button>
        </div>

    </div>)
}

export default Donation