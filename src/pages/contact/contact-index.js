const Contact = () => {
    return (
        <main class="flex rows">
        <div id="section-container" class="flex column nowrap justify-center align-center">
            <section class = "section flex column nowrap justify-left align-left">
                <h1>Contact Information and Links</h1>
                <a> Github</a>
                <a>LinkedIn</a>
                <a>Email: yinzhe.dy@gmail.com</a>
            </section>
            <section class="section flex column nowrap">
                <form class ="flex column nowrap justifu-left align-left">
                  <h1>Contact Form</h1>
                    <label>Name:</label>
                    <input type="text"/>
                    <label>Email:</label>
                    <input type="email"/>
                    <label>Message:</label>
                    <input type="text"/>
                    <input id="contact-submit-button" type="submit"/>  
                </form>
                
            </section >
        </div>
    </main>
    )
}

export default Contact;