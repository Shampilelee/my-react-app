import React, {useContext} from 'react';
import { UserContext } from "./ComponentA";
import ComponentD from './ComponentD';

function ComponentC() {

    const sayHi = useContext(UserContext);
    
    return (
        <div style={{border: '3px solid', padding: '25px'}}>
            <h1>Component C</h1>
            <h2>{`Hi There: ${sayHi}`}</h2>
            <ComponentD />
        </div>
    )
}

export default ComponentC
