import React from 'react'
import '../styles/item.scss'

export default function Item(props) {

    console.log(props)
    return (
        <div className="list-group mb-4">
            {
                props.items.map((item) =>
                <div className="list-group-item  d-flex 
                justify-content-between align-item-center"
                    key={item.id}>  
                    
                      <div className={item.status ? "strike" : "todo-item-text"}>{item.text}</div>

                     <div>
                    
                     <span 
                     onClick={() => props.onStatus(item.id)} 
                     className={"badge badge-pill ml-4 " + (item.status ? "badge-success" : "badge-warning")}>
                     {item.status ? "Done " : "Todo"} </span>


                     <span onClick={()=> props.onDelete(item.id)}
                     className="close ml-2">
                     &times;
                     </span>
                     </div>
                     

                </div>

                )
            }
        </div>
    )
}
