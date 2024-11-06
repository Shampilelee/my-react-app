
import { useState } from "react"

function Ecomm() {

    const [quantity, set_Quantity] = useState(0);
    const [usrname, set_Usrname] = useState('GUEST');
    

    const cart_Add = () => set_Quantity(q => q + 1);

    const cart_Remove = () => quantity <= 0 ? set_Quantity(0) : set_Quantity(q => q - 1);
    
    return(
        <div className="ecomm" id="pg1">
            <div className="top">
                <h1>ECOMM</h1>

                <div className="data_Center">
                    <div className="usrname">{usrname}</div>

                    <div className="cart">
                        <div className="icon">🛒</div> 
                        <div className="num">{quantity}
                    </div>
                </div>

                </div>
            </div>

    

            <div className="products">
                
                <div className="item">
                    <div className="image">
                        <img src="/src/assets/img/pic.png" alt="" />
                    </div>
                    
                    <div className="detials">

                        <div className="info box_Btns">
                            <div className="name">Screen</div>
                            <div className="price">¢600.0</div>
                        </div>

                        <div className="action box_Btns">
                            <div className="add act_Btn" id="btn1" onClick={cart_Add}>✅</div>
                            <div className="remove act_Btn" onClick={cart_Remove}>⛔</div>
                        </div>
                
                    </div>
                </div>

                <div className="item">
                    <div className="image">
                        <img src="/src/assets/img/pic.png" alt="" />
                    </div>
                    
                    <div className="detials">

                        <div className="info box_Btns">
                            <div className="name">Screen</div>
                            <div className="price">¢600.0</div>
                        </div>

                        <div className="action box_Btns">
                            <div className="add act_Btn" id="btn1" onClick={cart_Add}>✅</div>
                            <div className="remove act_Btn" onClick={cart_Remove}>⛔</div>
                        </div>
                
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Ecomm
