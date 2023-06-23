const Nav = () => {
    let path = window.location.pathname;
    console.log(path)
    if (path == '/easton-nights-home') {
        return (
            <div id="nav-container">
            <ul class=" flex column wrap justify-left align-left text-left"> 
                <li  class = "nav-item"><a class = "style-link white-font" href="/dreams">DREAMS</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/colors">COLORS</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/stages">STAGES</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/words">WORDS</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/geometry">GEOMETRY</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/beehives">BEEHIVES</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/portals">PORTALS</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/fauna">FAUNA</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/flora">FLORA</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/memesis">MEMESIS</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/the-end-the-beginning">THE END, THE BEGINNING</a></li>
            </ul>

        </div>
        )
        }
    else if (path == '/') {
        return (
            <div id= "nav-container">
            <ul class=" flex column wrap justify-left align-left text-left"> 
                <li  class = "nav-item"><a class = "style-link white-font" href="/easton-nights-home">EASTON NIGHTS</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/exhibitions">EXHIBITIONS</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/highlights">HIGHLIGHTS</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/valley-days">VALLEY DAYS</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/valley-days-rondels">VALLEY DAYS - RONDELS</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/waiting-for-palms">WAITING FOR PALMS</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/black-white-and-grey">BLACK WHITE AND GRAY</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/a-commuters-motions">A COMMUTERS MOTIONS</a></li>
                <li  class = "nav-item"><a class = "style-link white-font" href="/away">AWAY</a></li>
            </ul>

        </div>
    )}
    else {
        return (
            <div></div>
        )
    }

    

    
}

export default Nav;