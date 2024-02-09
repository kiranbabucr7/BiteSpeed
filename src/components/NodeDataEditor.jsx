import React from 'react'

export default function NodeDataEditor(props) {
  const {nodes, setNodes} = props
  const selectedNode = nodes.find(node => node.selected)
  return (
    <aside>
      {selectedNode.data.text}
    </aside>
  )
}
