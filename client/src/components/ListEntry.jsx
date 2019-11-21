import React from "react";

var ListEntry = ({cow, handleClick, deleteElement, updateElement}) => {
  return (
    <li>
      <div className='listEntry'>
        <p onClick={()=>handleClick(cow)}>{cow.name}</p> 
        <button type='button' onClick={()=>updateElement(cow)} >Edit</button> <button type='button' onClick={() => deleteElement(cow)} >Delete</button>
      </div>
    </li>
  )
}

export default ListEntry;