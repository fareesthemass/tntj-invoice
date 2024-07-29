import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login(){
    const navigate = useNavigate()
    const username = 'admin@bdm'
    const password = 'bismillah'

    const [uname,setuname]=useState('')
    const [pass, setpass]=useState('')

    const handleuname=(evt)=>{
        setuname(evt.target.value)
    }

    const handlepass=(evt)=>{
        setpass(evt.target.value)
    }

    var [login,setlogin] =useState(true)
    const Check = ()=>{
        if(username === uname && password === pass){
           navigate('/content')
        }
        else{
            setlogin(false)
        }
    }
    return(
        <div className="cover">
        <div className="cover__white">
            <h1 className="text-2xl font-medium">السَّلَامُ عَلَيْكُمْ👋</h1>
           {login ? <p>I help you manage your Invoice after you login :)</p> : <p style={{color:'red',backgroundColor:"white", padding:'5px',borderRadius:"10px"}}>Please enter correct username and password!</p> }

            
                <input type="text"
                    className="input"
                    placeholder="Username"
                    value={uname}
                    onChange={handleuname}
                    />

                <input type="text"
                    className="input"
                    placeholder="Password"
                    onChange={handlepass}
                    value={pass}
                   />

                <button className="cover__btn" onClick={Check}>Login</button>
           
          
        </div>

    </div>)
}

export default Login