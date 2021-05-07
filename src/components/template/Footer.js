import React from 'react'
import { Link } from 'react-router-dom'

function Footer() { 
    return (
        <div className="footer pt-5" style={{background: "#2d3246"}}>
            <footer className="section footer-classic context-dark bg-image">
        <div className="container"> 
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4">
                <div className="nav-logo mb-4">
                    <Link to="/">e-Gammer</Link>
                </div>
                <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
                
                <p className="rights"><span>©  </span><span className="copyright-year">2021</span><span> </span><span>eGammer</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div className="col-md-4">
              <h4 className="prod-name">Contacts</h4>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>Osogbo, Nigeria</dd>
              </dl>
              <dl className="contact-list">
                <dt>Email:</dt>
                <dd><a href="mailto:#">alaladesambluez@gmail.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>Phone:</dt>
                <dd><a href="tel:+2348133355944">+2348133355944</a>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
            <h4 className="prod-name">Links</h4>
              <ul className="nav-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/">My Account</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="otherContact my-5">
            <p style={{textAlign: "center", color:"#aaa"}} className="body">You can also reach us on several social media platforms. Select your best platform, and we're right there!</p>
                <div style={{textAlign: "center"}} >
                    <a target="_blank" rel="noreferrer" className="contSocIcon" href="https://wa.me/+2348133355944"><i className="fab fa-whatsapp"></i></a>
                    <a target="_blank" rel="noreferrer" className="contSocIcon" href="https://facebook.com/alalade.samuelsambluez"><i className="fab fa-facebook "></i></a>
                    <a target="_blank" rel="noreferrer" className="contSocIcon" href="https://twitter.com/iamaeskay"><i className="fab fa-twitter "></i></a>
                    <a target="_blank" rel="noreferrer" className="contSocIcon" href="https://instagram.com/aeskay"><i className="fab fa-instagram "></i></a>
                </div>
            </div>
      </footer>
            <div style={{background: "#000"}} className="py-2 mt-5" >
                &copy;2021, SKA Technologies
            </div>
        </div>
    )
}

export default Footer
