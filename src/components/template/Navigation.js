import React, { useState } from 'react';
import Menu from './Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
function Navigation(props) {
    const [showMenu, setShowMenu] = useState(false)

    const handleClick = () => {
        setShowMenu(!showMenu)
    }
    const handleOver = () => {
        setShowMenu(true)
    }
    const handleLeave = () => {
        setShowMenu(false)
    }
    
    return (
        <React.Fragment>
            <div className="navDiv " >
                <div className="nav-logo">
                    <Link to="/">e-Gammer</Link>
                </div>
                <Menu/>
            </div>
            <div className="navDivMini">
                <div className="nav-logo">
                <Link to="/">e-Gammer</Link>
                </div>
                <div>
                    
                    <MenuIcon style={{float:"right", color:"red", cursor:"pointer", fontSize:"35px"}} onClick={handleClick}/> 
                    <div className="miniMenu">
                        {showMenu?<Menu handleOver={handleOver} handleLeave={handleLeave}/>:null} 
                    </div>
                    
                </div>
                   
            </div>
             
        </React.Fragment>
    );
}

export default Navigation;