
function Footer() {
    
    return (
        <footer>
            <div className="boxes">
                <div className="top">
                    <h3>Xbox</h3>

                    <form action="" method="post">
                        <input type="email" placeholder="Enter Email Address" required />
                        <input type="submit" value="Get Noticed" />
                    </form>
                </div>

                <div className="down">
                    <div className="contact box">
                        <h3>Contact</h3>

                        <ul className="links">
                            <li><a href="">X</a></li>
                            <li><a href="">FACEBOOK</a></li>
                            <li><a href="">IG</a></li>
                            <li><a href="">website</a></li>
                            <li><a href="">xbox_offical@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className="pages box">
                        <h3>Pages</h3>
                        <ul className="links"> 
                            <li><a href="">Home</a></li>
                            <li><a href="">Buy</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">JOIN</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="copyrigth">
                <h3>&copy; {new Date().getFullYear()} your website name</h3>
            </div>
        </footer>
    );
}

export default Footer;
