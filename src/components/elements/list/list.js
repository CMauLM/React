import React from 'react'
import ListItem from './listitem'

const List = (props) => {

    let {listItems, removeItemFromList, markTaskCompleted} = props

    let listContent = listItems.map((item, index) => {
        return (
            <ListItem
            item={item}
            key={index}
            removeItemFromList={() => {removeItemFromList(index)}}
            markTaskCompleted={() => {markTaskCompleted(index)}}
            />
        )
    })
    return(
        <div>
            {listContent}
        </div>
    )
}

export default List