import ProfilePic from "./assets/img/pic.png";
function Card() {
    

    return (
        <>
            <div className="card">
                <img src={ProfilePic} alt="profile pic" />
                <h2>Dhope React</h2>
                <p>Refreshing React skills after some time out.</p>
            </div>
        </>
    );
}

export default Card