import React from "react";
import ListEntry from './ListEntry';

var List = ({cowList}) => {
  return (
  <div className='list'>
    <ul>
      {cowList.map((cow) => {
        return <ListEntry cow={cow}/>
      })}
    </ul>
  </div>
  )
}

export default List;