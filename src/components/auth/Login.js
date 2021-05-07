import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addUser} from '../../features/product/userSlice'
import './Login.css'

function Login() {
    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e)=>{
        const user =[]
        user.push(email,fname,fname,pass)
        dispatch(addUser(user));
        history.push('/')
        e.preventDefault();
        
    }
    return (
        <div>
            <div className="header">
                <h2 className="prod-name">Log In</h2>
            </div>
            <div className="wrapper fadeInDown my-5">
                <div id="formContent">

                    <div className="fadeIn first">
                        <div className="navvv">
                            <Link to="/">e-Gammer</Link>
                        </div> 
                    </div>

                    <form>
                    <input type="text" id="login" className="fadeIn second" name="fname" placeholder="First Name" required onChange={(e)=> setFname(e.target.value)}/>
                    <input type="text" id="login" className="fadeIn second" name="lname" placeholder="Email" required onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password" onChange={(e)=> setPass(e.target.value)}/>
                    <input type="submit" className="fadeIn fourth" value="Log In" onClick={handleSubmit}/>
                    </form>

                    <div id="formFooter">
                    <Link to="/home" className="underlineHover">Forgot Password?</Link><br/>
                    Don't have an account?<Link to="/signup" className="underlineHover"> Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
