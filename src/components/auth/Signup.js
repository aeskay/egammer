import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addUser} from '../../features/product/userSlice'

function Signup() {
    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [lname, setLname] = useState('')
    const [pass, setPass] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        const user =[]
        user.push(email,fname,lname,pass)
        dispatch(addUser(user))
        e.preventDefault();
        
    }
    return (
        <div>
            <div className="header">
                <h2 className="prod-name">Sign Up</h2>
            </div>
            <div className="wrapper fadeInDown my-5">
                <div id="formContent">

                    <div className="fadeIn first">
                        <div className="navvv">
                            <Link to="/">e-Gammer</Link>
                        </div> 
                    </div>

                    <form>
                        <input type="email" className="fadeIn" name="email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="text" className="fadeIn" name="fname" placeholder="First Name" onChange={(e)=>setFname(e.target.value)}/>
                        <input type="text" className="fadeIn" name="lname" placeholder="Last Name" onChange={(e)=>setLname(e.target.value)}/>
                        <input type="password" className="fadeIn" name="lname" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
                        <input type="submit" className="fadeIn fourth" value="Create Account" onClick={handleSubmit}/>
                    </form>


                    <div id="formFooter">
                    Already have an account?<Link to="/login" className="underlineHover"> Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup

