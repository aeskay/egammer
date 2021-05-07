import React, { Component } from 'react'
import './Contact.css'

export class Contact extends Component {
    state = {
        name: '',
        email:'',
        message:''
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit = (e) => {
        const {name, email, message} = this.state;
        console.log(name, email, message)
        this.setState({
            email:'',
            message:'',
            name:''
        });
        e.preventDefault();
        window.open(`https://wa.me/+2348133355944?text=Hello Samuel, my name is ${this.state.name}. ${message}. My email is ${email}. Thanks`, '_blank')
    }

    render() {
        return (
            <div>
                 <div className="header">
                    <h2 className="prod-name">Contact</h2>
                </div>
                <div className=" d-flex justify-content-center">
                <div className="my-5">
                <h2 className="prod-name my-5">Contact Us</h2>
                <div className="formDiv">
                    <form onSubmit={this.handleSubmit} className="contactForm text-center">
                        <div className="input-icons">
                            
                            <i className="fa fa-user icon"></i>
                            <input placeholder="Your Name" onChange={this.handleName} type="text" name="name"/>
                        </div>
                        <div className="input-icons">
                            <i className="fa fa-envelope icon"></i>
                            <input placeholder="Your Email" onChange={this.handleEmail}  type="email" name="email"/>
                        </div>
                        <div className="input-icons">
                            <i className="fa fa-edit icon"></i>
                            <textarea placeholder="Your Message" onChange={this.handleMessage} ></textarea>
                        </div>
                        <div>
                            <button type="submit" className="formBtn">Send Message</button>
                        </div>
                    </form>
                    <div className="otherContact my-5">
                    <p style={{textAlign: "center", color:"#aaa"}} className="body">You can also reach us on several social media platforms. Select your best platform, and we're right there!</p>
                        <div style={{textAlign: "center"}} >
                            <a target="_blank" rel="noreferrer" className="contSocIcon" href="https://wa.me/+2348133355944"><i className="fab fa-whatsapp"></i></a>
                            <a target="_blank" rel="noreferrer" className="contSocIcon" href="https://facebook.com/alalade.samuelsambluez"><i className="fab fa-facebook "></i></a>
                            <a target="_blank" rel="noreferrer" className="contSocIcon" href="https://twitter.com/iamaeskay"><i className="fab fa-twitter "></i></a>
                            <a target="_blank" rel="noreferrer" className="contSocIcon" href="https://instagram.com/aeskay"><i className="fab fa-instagram "></i></a>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
            </div>
        )
    }
}

export default Contact
