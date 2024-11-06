import { useEffect } from "react";


function Header() {
    
    useEffect(() => {

        // HEADER - MENU
        // chg header bg-Color when I scroll down
        window.addEventListener('scroll', chg_Header_BgC);
        console.log("eventlistener MOUNTED");

        return () => {
            window.removeEventListener('scroll', chg_Header_BgC)
            console.log("eventlistener UNMOUNTED");
        }
    })

    
    const chg_Header_BgC = () => {
        var header = document.getElementById('header');

        // Adjust this value as needed
        if (window.scrollY > 50) { 
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    };
    
    
    return (
        <>
            <header id="header">
                <h1>Xbox</h1>
                <nav>
                    <a href="">Home</a>
                    <a href="">Pages</a>
                    <a href="">Services</a>
                    <a href="">Contact</a>
                </nav>
            </header>
        </>
    );
}

export default Header;
