import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const nodes = [
    {children:( 
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'textUpdater')} draggable>
      Message Node
      </div>),
      key:1
    }
  ]

  return (
    <div>
      <div className="description">You can drag these nodes to the pane on the left.</div>
      {nodes.map(node => <div key = {node.key}>{node.children}</div>)}
    </div>
  );
};
