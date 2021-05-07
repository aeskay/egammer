import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FeaturedProducts from './FeaturedProducts';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <React.Fragment>
        <div className="header">
            <div className="row">
                <div className="col-sm-6 text-center align-self-center">
                    <h2 className="headText">Kill or Get Killed</h2>
                    <p className="bodyText">The best PC Games just for you</p>
                    <Link to="/shop">
                        <button className="button-large button-smlg">Shop Games</button>
                    </Link>
                </div>
                <div className="col-sm-6 text-center">
                    <img alt="God of war" src="/images/gow.png" className="img-fluid"/>
                    <Link to="/shop">
                        <button className="button-small button-smlg">Shop Games</button>
                    </Link>
                </div>
            </div>
            
        </div>
        
        <div className="row homeRowTwo">
            <div className="col-sm-4">
                <div className="freeBox badgeOne text-white">
                    <span style={{marginRight:10}}><LanguageIcon style={{fontSize:"30px"}}></LanguageIcon></span>
                    <span>
                        <span><strong>FREE SHIPPING</strong></span><br/>
                        <span style={{fontSize:15}}>For Minimum of $200</span>
                    </span>
                </div>
            </div>

            <div className="col-sm-4">
                <div className="freeBox badgeTwo text-white">
                    <span style={{marginRight:10}}><AccessTimeIcon style={{fontSize:"30px"}}></AccessTimeIcon></span>
                    <span>
                        <span><strong>30-DAYS RETURN</strong></span><br/>
                        <span style={{fontSize:15}}>Money Back Guarantee</span>
                    </span>
                </div>
            </div>

            <div className="col-sm-4">
                <div className="freeBox badgeOne text-white">
                    <span style={{marginRight:10}}><ContactSupportIcon style={{fontSize:"30px"}}></ContactSupportIcon></span>
                    <span>
                        <span><strong>24/7 SUPPORT</strong></span><br/>
                        <span style={{fontSize:15}}>Lifetime Support</span>
                    </span>
                </div>
            </div>
        </div>
        <div className="text-center mb-4">
            <h2 className="prod-name">Featured Products</h2>
        </div>
        <div className="center">
            <FeaturedProducts/>
        </div>
        <div className="text-center my-4">
            <Link to="/shop">
                <button className="btn bg-ty">Shop More</button>
            </Link>
        </div>
        </React.Fragment>
    );
}

export default Home;