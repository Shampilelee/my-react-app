import { useState, useRef } from "react"


function Display_What_Itype() {
    
    const inputRef = useRef("null");

    const [word, set_Word] = useState("Say something")
    
    const showText = () => set_Word(inputRef.current.value)


    return (
        <div className="display_Me_Container" id="pg1">
            <h1>What's on your mind?</h1>
            <input type="text" ref={inputRef} onChange={showText} placeholder="Say here..." />
            <h2>{word}</h2>
        </div>
    )
    
}

export default Display_What_Itype
