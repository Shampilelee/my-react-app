import PropTypes from 'prop-types';

function Student(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is_Student: {props.is_Student ? 'Yes' : 'No'}</p>
        </>
    )
    
}

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    is_Student: PropTypes.bool
}

Student.defaultProps = {
    name: 'Guest',
    age: 0,
    is_Student: false
}

export default Student