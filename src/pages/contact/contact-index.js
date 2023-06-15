const Contact = () => {
    return (
        <main class="flex rows">
        <div id="section-container" class="flex column nowrap justify-center align-center">
            <section class = "section flex column nowrap justify-left align-left">
                <h1 class="header-1">Contact Information and Links</h1>
                <a> Github</a>
                <a>LinkedIn</a>
                <a>Email: yinzhe.dy@gmail.com</a>
            </section>
            <section id="contact-form-section" class="section flex column nowrap">
                <form id= "contact-form" class ="flex column nowrap justify-center align-center">
                  <h1 class="header-1">Contact Form</h1>
                    <label class= "contact-form-label">Name:</label>
                    <input class = "contact-form-input" type="text"/>

                    <label class="contact-form-label">Email:</label>
                    <input class = "contact-form-input" type="email"/>

                    <label class="contact-form-label">Message:</label>
                    <input id = "contact-form-message" class = "contact-form-input" type="text"/>

                    <label class="contact-form-label"></label>
                    <input id="contact-form-submit-button" type="submit"/>  
                </form>
                
            </section >
        </div>
    </main>
    )
}

export default Contact;