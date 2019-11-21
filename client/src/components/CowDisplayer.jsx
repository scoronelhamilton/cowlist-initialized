import React from 'react';

const CowDisplayer = function({cow}) {
  let cowDisplay;
  if ( cow.name ) {
    cowDisplay = `${cow.name}: ${cow.description}`;
  } else {
    cowDisplay = '';
  }

  return (
    <div className='displayer'>
      <br/>
      <b>{cowDisplay}</b>
    </div>
  )
}

export default CowDisplayer;