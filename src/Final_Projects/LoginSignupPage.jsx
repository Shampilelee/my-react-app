import { useRef, useEffect, useState } from "react"

function Login_Signup() {

    const inputRef = useRef(null)

    const [page, setPage] = useState(false);
    const [usrname, setUsrname] = useState('');

    const display_Usrname = () => setUsrname(inputRef.current.value);

    const chg_Pages = () => setPage(!page);

    useEffect(() => {
        const pages = document.querySelectorAll('.container form');
        const joinus = document.getElementById('joinus');
        const welcm = document.getElementById('welcm');
        
        if (page) {
            pages[0].style.display = "none";
            pages[1].style.display = "inline-block";
            joinus.style.display = "inline-block";
            welcm.style.display = "none";
        } else {
            pages[0].style.display = "inline-block";
            pages[1].style.display = "none";
            joinus.style.display = "none";
            welcm.style.display = "inline-block";
        }
        
    }, [page])

    

    return (
        <div className="login_Signup">
            <div className="container login">
                <h1 id="joinus">JOIN US</h1>

                <form action="http://localhost:5173/" method="post">
                    <h3>LOGIN</h3>
                        <input type="email" placeholder="Enter email" ref={inputRef} onChange={display_Usrname} required /><br/>
                        <input type="password" placeholder="Enter password" required /><br/>
                        <input type="submit" value="Login" /><br/>
                        <input type="reset" value="Reset" />
                    <div className="goto_SignUp" onClick={chg_Pages}>signup</div>
                </form>

            </div>


            <div className="container signup">
                <h1 id="welcm">WELCOME BACK, {usrname}</h1>
                
                <form action="http://localhost:5173/" method="post">
                    <h3>SIGNUP</h3>
                        <input type="text" placeholder="Enter username" /><br/>
                        <input type="email" placeholder="Enter email" required /><br/>
                        <input type="password" placeholder="Enter password" required /><br/>
                        <input type="submit" value="Signup" /><br/>
                        <input type="reset" value="Reset" />
                    <div className="goto_SignUp" onClick={chg_Pages}>Login</div>
                </form>
            </div>
        </div>
    )
    
}

export default Login_Signup
