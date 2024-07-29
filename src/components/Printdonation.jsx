import { useLocation } from "react-router-dom"
import img from '../assets/flag.webp'
import sign from '../assets/hamdan-sign.png'
function Printdonation() {
    const location = useLocation()
    const { name, purpose, amount, formatteddate } = location.state || {}
    const printhandle = (evt) => {
        evt.target.style="display:none"
        window.print()
    }
    return (
    <>
    <div className="cover">
        <div className="fullitems">



            <table className='billcutBox' border={"1"}>
                <tr> <td>
                    <div className="details">

                        <div>
                            <img src={img} width={'100px'} className="billcut__img" alt="" />
                        </div>

                        <div>
                            <p>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
                            <h2>TAMIL NADU THOWHEED JAMAATH</h2>
                            <h3>Budamangalam kilai, Thiruvarur North District</h3>
                            <p>Kilai Address: 3/763, Deen Street, Budamangalam, 610102</p>
                        </div>

                        <div>
                            <p className="p">Date: {formatteddate}</p>
                            <div className="contactBox">
                                <p>Contact Us:</p>
                                <p> +918667270926</p>
                            </div>

                        </div>

                    </div>
                </td>
                </tr >

                <tr>
                    <td>
                        <div className="purpose__details">
                            <h2>Purpose: {purpose}</h2>

                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div className="person__details" style={{ textAlign: "left", marginLeft: "5px" }}>
                            <table >
                                <tr>
                                    <td><p><strong>Name: </strong>{name}</p></td>
                                </tr>

                                <tr><p><strong>Amount: </strong>{amount} Rs/- Received</p></tr>
                            </table>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><p>Narrated `Adi bin Hatim heard the Prophet (ﷺ) saying:

                        "Save yourself from Hell-fire even by giving half a date-fruit in charity."  Sahih al-Bukhari 1417</p></td>
                </tr>
                <div className="billcut__bottom">
                    <div>
                        <p className="billcut__bottom__amt">₹ {amount}</p>
                    </div>
                    <div>
                        <p><b>Collector</b></p>
                        <img className="signimg" src={sign} width={"100px"} alt="" />
                    </div>
                </div>
            </table >


            {/* <div>
            <p>Name: {name}</p>
            <p>Amount: {amount}</p>
            <p>Date: {date}</p>
        </div>
        <button onClick={() => window.print()}>Print this page</button> */}
        </div>
        
    </div>
    <div className="printbtn">
            <button className="print__btn" onClick={printhandle}>Click Here to Print</button>
            </div>
    </>
    )
}

export default Printdonation