const Header = () => {
    return (
        <header class = "header">
    <div id="name" class=" text-left "> YINZHE DONG-YDEEN </div>
        <nav id="header-list-container" class="flex nowrap row justify-left ">
            <a class="header-list-item hover-mint">
                about
            </a>
            <a class="header-list-item hover-mint">
                contact
            </a>
            
            <div class="header-list-item dropdown">
                    <a class="hover-mint">collections</a>
                
                <div id="collections-list" class="dropdown-content flex column left">
                    <a class="collections-list-item hover-mint-dark">
                        portraits
                    </a>
                    <a class="collections-list-item hover-mint-dark">
                        fan art
                    </a>
                    <a class="collections-list-item hover-mint-dark">
                        custom orders
                    </a>
                </div>

            </div>
        </nav>
    
</header>
    )
}

export default Header;