import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB';

// The Context Name Depends On What You Want To Use It For.
// If For A Color You Can Say 'ColorContext' If A User 'UserContext' And So On.
export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Dhope")

    
    return (
        <div style={{border: '3px solid', padding: '25px'}}>
            
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2> 

            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA
