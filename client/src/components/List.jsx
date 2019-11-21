import React from "react";
import ListEntry from './ListEntry';

var List = ({cowList, handleClick, deleteElement}) => {
  return (
  <div className='list'>
    <ul>
      {cowList.map((cow) => {
        return <ListEntry key={cow.id} cow={cow} handleClick={handleClick} deleteElement={deleteElement} />
      })}
    </ul>
  </div>
  )
}

export default List;