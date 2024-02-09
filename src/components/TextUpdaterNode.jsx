import { Handle, Position } from 'reactflow';
import { ReactComponent as MessageSVG } from '../icons/message-circle-lines-alt-svgrepo-com.svg';
import { ReactComponent as WhatsappSVG } from '../icons/whatsapp-svgrepo-com.svg';
import '../index.css'

function TextUpdaterNode({ data, isConnectable, selected }) {
  return (
    <div className={`text-updater-node ${selected? 'text-updater-node-selected' : ''}`}>
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', backgroundColor: '#B2EFE4', borderRadius:'3px'}}>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingLeft:'2px'}}>
            <MessageSVG style={{width:"10px", height:"10px"}} />
            <p style={{fontSize: '8px', paddingLeft:'4px'}}>Send Message</p>
          </div>
          <WhatsappSVG style={{width:"19px", height:"10px"}}/>
        </div>
        <p style={{margin: '4px', fontSize: '8px'}}>{data.text}</p>
      </div>
      <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
