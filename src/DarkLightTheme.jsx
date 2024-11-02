import { useState, useEffect, useRef } from "react"


function Dark_Ligth_Theme() {
    
    const inputRef = useRef("null");

    const [word, set_Word] = useState("Say something")

    useEffect(() => console.log("RENDERED"), [word])
    
    const showText = () => set_Word(inputRef.current.value)


    return (
        <div className="d_L_Theme_Container">
            <h1>What's on your mind?</h1>
            <input type="text" ref={inputRef} onChange={showText} placeholder="Say here..." />
            <h2>{word}</h2>
        </div>
    )
    
}

export default Dark_Ligth_Theme
