import { useNavigate } from "react-router-dom";
function Content() {
    const navigate = useNavigate()
    const today = new Date()
    const formatteddate = today.toLocaleDateString()

const handledonate = ()=>{
    navigate('/donation',{state:{formatteddate}})
}

const handlemasjid=()=>{
    navigate('/masjid',{state:{formatteddate}})
}

    return (
        <>

            <div>
            <div className="title">
            <h1>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
            </div>

        <div className="whatwant">
            <div className="masjid" onClick={handlemasjid}>
                <h3>For Masjid</h3>
            </div>

            <div className="donation" onClick={handledonate}>
                <h3>Donation</h3>
            </div>
        </div>
        </div>
            

        </>
    )
}

export default Content
