import PropTypes from 'prop-types';

function UserGreeting(props) {

    const welcm_Msg = <h2>Welcome {props.usrname}</h2>
    const login_Prompt = <h2>Kindly Login</h2>
    
    return (
        props.is_LoggedIn ? welcm_Msg : login_Prompt               
    )
}

UserGreeting.Proptypes = {
    is_LoggedIn: PropTypes.bool,
    usrname: PropTypes.string
}

UserGreeting.defaultProps = {
    is_LoggedIn: false,
    usrname: 'Guest'
}

export default UserGreeting


