import { useRef } from "react"

function Google_Search() {

    const refText = useRef(null);
    
    const chg_Doc_Title = () => document.title = refText.current.value;

    return (
        <div className="google_Search">
            <h1>Google</h1>
            <input type="search" ref={refText} onChange={chg_Doc_Title} placeholder="type here" />
        </div>
    )
    
}

export default Google_Search

