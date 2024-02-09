import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import '../index.css'

function TextUpdaterNode({ data, isConnectable, selected }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className={`text-updater-node ${selected? 'text-updater-node-selected' : ''}`}>
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <div>
        <p>{data.text}</p>
      </div>
      <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
