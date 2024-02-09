import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const nodes = [
    <div className="dndnode" onDragStart={(event) => onDragStart(event, 'textUpdater')} draggable>
      Message Node
    </div>
  ]

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the left.</div>
      {nodes.map(node => node)}
    </aside>
  );
};
