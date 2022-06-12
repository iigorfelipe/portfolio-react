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
                  <h3>Endereço</h3>
                  <p>Piracaia, São Paulo</p>
                </div>
              </div>
  
              <div className="box">
                <div className="icon"><BsPhone /></div>
                <div className="text">
                  <h3>Celular</h3>
                  <p>(11) 9 7478-5794</p>
                </div>
              </div>

              <div className="box">
                <div className="icon"><AiOutlineMail /></div>
                <div className="text">
                  <h3>Email</h3>
                  <p>iigorfelipe@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contactForm">
              <form>
                <h2>Envie uma Mensagem</h2>
  
                <div className="inputBox">
                  <input type="text"  name="" required="required"/>
                  <span>Nome Completo</span>
                </div>

                <div className="inputBox">
                  <input type="text"  name="" required="required"/>
                  <span>Email</span>
                </div>

                <div className="inputBox">
                  <textarea required="required"/>
                  <span>Escreva sua mensagem...</span>
                </div>
               
                <div className="inputBox">
                  <input type="submit" name="" value="Enviar" />
                </div>
              </form>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
