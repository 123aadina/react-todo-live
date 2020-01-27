import React from 'react'

export default function Counter(props) {

    // const total= Object.keys(props.items).length
           
    return (
        <div>
           task completed <p className="badge badge-success">{ props.items
           .filter(
            item => item.status === true).length
        }</p> from 
           <p className=" badge badge-danger">{props.items.length}</p>
        </div>
    )
}

