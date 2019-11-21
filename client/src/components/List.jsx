import React from "react";
import ListEntry from './ListEntry';

var List = ({cowList, handleClick, deleteElement, updateElement}) => {
  return (
  <div className='list'>
    <ul>
      {cowList.map((cow) => {
        return <ListEntry key={cow.id} cow={cow} handleClick={handleClick} deleteElement={deleteElement} updateElement={updateElement}/>
      })}
    </ul>
  </div>
  )
}

export default List;