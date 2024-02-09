import React from 'react'

export default function NodeDataEditor(props) {
  const {nodes, setNodes} = props
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
    <aside>
      <input value={selectedNode.data.text} onChange={onChange}/>
    </aside>
  )
}
