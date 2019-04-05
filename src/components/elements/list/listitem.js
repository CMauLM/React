import React from 'react'
import Button from '../button'

const ListItem = (props) => {

    let {item, removeItemFromList, markTaskCompleted} = props

    return (
        <div className='card'>
            {
                item.completed ? <s>{item.task}</s> : item.task
            }
            <div>
                <Button
                clickHandler={markTaskCompleted}>
                {
                    item.completed ?
                    'Complete' :
                    'Uncomplete'
                }
                    
                </Button>
                <Button
                    clickHandler={removeItemFromList}>
                        Del
                </Button>
            </div>
        </div>
    )
}

export default ListItem