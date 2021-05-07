import React from 'react'
import { Link } from 'react-router-dom'

function Default() {
    return (
        <div>
            <div className="row header">
                
                <div className="col-sm-6 text-center">
                    <img alt="God of war" src="/images/soldier.png" className="img-fluid"/>
                </div>
                <div className="col-sm-6 text-center align-self-center">
                    <h2 className="headText">Page not Found</h2>
                    <p className="bodyText">Let's get you back in the battle</p>
                    <Link to="/">
                        <button className=" button-smlg">Go Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Default
