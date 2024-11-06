import { useEffect } from "react";


function Footer() {


    useEffect(() => {

        // FOOTER 
        const footer_work = document.getElementById('footer');
        const Btns = document.querySelectorAll('.top_Btn a');

        const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio >= 0.1) {
                        Btns[0].style.display = "block";
                        Btns[1].style.display = "none";
                    } else {
                        Btns[0].style.display = "none";
                        Btns[1].style.display = "block";
                    }
                });
            }, {
                threshold: [0, 0.1] // Checks 0% and 10% visibility
            }
        );

        observer.observe(footer_work);


        return () => {
            console.log("observer UNMOUNTED");
            observer.disconnect();
        } 
    })

    

    return (
        <footer id="footer" className="footer">
            
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
            
            <div className="top_Btn" id="top_Btn">
                <a href="#pg1">🔝</a>
                <a href="#footer">⏬</a>
            </div>
        </footer>
    );
}

export default Footer;
