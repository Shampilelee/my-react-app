import { useEffect, useState } from "react";

function Chg_Theme() {

    const [day, setDay] = useState(new Date().getHours() >= 18 ? false : true);
    
    const switch_Theme = () => setDay(d => d = !d);
    

    useEffect(() => {

        const box = document.getElementsByClassName('chg_Theme');
        const theme_Chg_Btn = document.getElementsByClassName('switch_Btn');

        if (day) {
            box[0].classList.add('day');
            theme_Chg_Btn[0].classList.add('switch_Btn_Day');
            console.log("it's Day");
        } else {
            box[0].classList.remove('day');
            theme_Chg_Btn[0].classList.remove('switch_Btn_Day');
            console.log("It's Night");
        }
    }, [day])

    
    
    return (
        <div className="chg_Theme" id="pg1">
            <h1>Change Theme</h1>

            <button onClick={switch_Theme} className="switch_Btn">{day ? "🌙" : "🌞"}</button>
        </div>
    )
    
}

export default Chg_Theme;
