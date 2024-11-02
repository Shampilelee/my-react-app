import PropTypes from 'prop-types'

function List(props) {

    // LIST NAME
    const list_Container = props.items;
    const list_Category = props.category;
    
    const list_Item = list_Container.map(container => <li key={container.id}> {container.name} &nbsp; <b>{container.calories}</b></li>)
    
    return (
        <>
            <h2>{list_Category}</h2>
            <ol>{list_Item}</ol>
        </>
    )
}

// DON'T USE THE VARIABLE NAME, USE THE 'props.NAME' EX: items: [], category: "Category".   
List.prototype = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List

