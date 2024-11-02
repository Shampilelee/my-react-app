
function Button () {
    
    /* const styles = {
        backgroundColor: 'hsl(200, 100%, 50%)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }

    const handle_Click = (e) => e.target.textContent = "CLICKED";
     

    return (
        <button style={styles} onClick={(e) => handle_Click(e)}>Click Me 🤣</button>
    ) */

    const handleClick = (e) => e.target.style.display = 'none';
    const img_URL = './src/assets/img/pic.png';

    return <img onClick={(e) => handleClick(e)} src={img_URL} />

}

export default Button
