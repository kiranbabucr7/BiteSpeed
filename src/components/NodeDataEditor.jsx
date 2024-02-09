import React from 'react'
import { ReactComponent as BackArrowSVG } from '../icons/arrow-back-basic-svgrepo-com.svg';
import '../index.css'

export default function NodeDataEditor(props) {
  const {nodes, setNodes, onUnSelectNode} = props
  const selectedNode = nodes.find(node => node.selected)
  const onChange = (e) => {
    const updatedNodes = nodes.map(node => {
      if(node.id === selectedNode.id){
        return {
          ...node,
          data: {
            ...node.data,
            text: e.target.value
          }
        }
      }
      return node
    })
    setNodes(updatedNodes)
  }
  return (
    <div style={{}}>
      <div style={{borderTop: '1px solid #ccc', padding: "8px"}}>
        <BackArrowSVG style={{width:'20px', height:'20px'}} onClick={onUnSelectNode}/>
        <p style={{textAlign:'center'}}>Message</p>
        <label style={{color: 'grey', display: 'block'}}>Text</label>
        <input className='node-text-input' style={{marginTop:"12px"}} value={selectedNode.data.text} onChange={onChange}/>
      </div>
    </div>
  )
}
