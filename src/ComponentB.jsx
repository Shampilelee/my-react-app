import React, {useState, useEffect} from 'react';
import ComponentC from './ComponentC'

function ComponentB() {

    return (
        <div style={{border: '3px solid', padding: '25px'}}>
            <h1>Component B</h1>
            <ComponentC />
        </div>
    )
}

export default ComponentB
