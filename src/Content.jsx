import { useState } from "react"
import { useNavigate } from "react-router-dom";
function Content() {

    const today = new Date()
    const formatteddate = today.toLocaleDateString()

    const [masjid, setMasjid] = useState(false)
    const masjidhandle = ()=>{
        setMasjid(!masjid)
    }

    
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

const handledonate = ()=>{
    navigate('/donation',{state:{formatteddate}})
}

    return (
        <>

            {masjid ? 
            
            <div className="billingMasjid">

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
                    <td><input type="text" placeholder="Amount" required value={amount} onChange={masjidamount}/></td>
                    </tr>
        
                    </table>
                    <button onClick={handlePrint}>Go to Print Page</button>
                </div>

            </div> 
            
            :

            <div>
            <div className="title">
            <h1>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
            </div>

        <div className="whatwant">
            <div className="masjid" onClick={masjidhandle}>
                <h3>For Masjid</h3>
            </div>

            <div className="donation" onClick={handledonate}>
                <h3>Donation</h3>
            </div>
        </div>
        </div>}
            

        </>
    )
}

export default Content
