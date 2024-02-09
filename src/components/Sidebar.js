import React from 'react';
import { ReactComponent as MessageSVG } from '../icons/message-circle-lines-alt-svgrepo-com.svg';
import "../index.css"
export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const nodes = [
    {children:( 
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'textUpdater')} draggable>
        <div className='message-node'>
          <MessageSVG style={{width:"16px", height:"16px"}} fill='#7989EF'/>
          <p style={{margin:'2px'}}>Message</p>
        </div>
      </div>),
      key:1
    }
  ]

  return (
    <div>
      {nodes.map(node => <div key = {node.key}>{node.children}</div>)}
    </div>
  );
};
