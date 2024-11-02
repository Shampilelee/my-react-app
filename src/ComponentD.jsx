import React, {useContext} from 'react';
import { UserContext } from "./ComponentA";

function ComponentD() {

    // Access Data From ComponentA, 
    // and Store It In Any Variable Name You Prefer 'gotUser'
    const gotUser = useContext(UserContext);
    
    return (
        <div style={{border: '3px solid', padding: '25px'}}>
            <h1>Component D</h1>
            <h2>{`Bye ${gotUser}`}</h2>
        </div>
    )
}

export default ComponentD
