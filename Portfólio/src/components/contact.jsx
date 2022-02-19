import React from "react";
import Navigation from './navigation';
import { BiMap } from 'react-icons/bi';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import '../css/contact.css';

export default function Contact() {
  return (
    <>
    <Navigation />
    <div>
      <section className="contact">
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><BiMap /></div>
              <div className="text">
                <h3>Address</h3>
                <p>000 Rua, Piraselva, São Paulo, 00000</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><BsPhone /></div>
              <div className="text">
                <h3>Phone</h3>
                <p>4002-8922</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><AiOutlineMail /></div>
              <div className="text">
                <h3>Email</h3>
                <p>juarino@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text"  name="" required="required"/>
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text"  name="" required="required"/>
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required="required"/>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
