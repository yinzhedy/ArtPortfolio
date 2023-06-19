import React, {useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); 

    emailjs.sendForm('service_h91kmea', 'template_illjkoa', form.current, 'iuZmFJfGz3yRYIkEB' )
        .then((result)=> {
            // show user success message
            console.log('sent!')
        }, (error) => {
            // show user error
            console.log(error)
            
        })
    }

    return (
        <div id="section-container" class="flex column nowrap justify-center align-center">
            <section class = "section flex column nowrap justify-left align-left">
                <h1 class="header-1">Contact Information and Links</h1>
                <a href="https://github.com/yinzhedy" class="style-link hover-mint-dark"> Github</a>
                <a href="https://www.linkedin.com/in/yinzhe-dong-ydeen-7a116121b/" class="style-link hover-mint-dark">LinkedIn</a>
                <a>Email: yinzhe.dy@gmail.com</a>
            </section>
            <section id="contact-form-section" class="section flex column nowrap">
                <form ref={form} onSubmit={sendEmail} id= "contact-form" class ="flex column nowrap justify-center align-center">
                  <h1 class="header-1">Contact Form</h1>
                    <label for='name-input' class= "contact-form-label">Name:</label>
                    <input name="user_name" id="name-input" class = "contact-form-input" type="text"/>

                    <label for="email-input" class="contact-form-label">Email:</label>
                    <input name="user_email" id="email-input" class = "contact-form-input" type="email"/>

                    <label for="contact-form-message" class="contact-form-label">Message:</label>
                    <textarea name="message" id = "contact-form-message" class = "contact-form-input" type="text"/>
                    
                    <input value="Send" id="contact-form-submit-button" type="submit"/>  
                </form>
                
            </section >
        </div>
    )
}

export default Contact;