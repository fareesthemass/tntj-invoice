import flag from './assets/flag.webp'
import './App.css'
function Navbar(){
return(
    <div className='navbar'>
        <img src={flag} width={'60px'} alt="" />
        <h2>TNTJ BDM Kilai Billing Portal</h2>
       
    </div>
)
}

export default Navbar