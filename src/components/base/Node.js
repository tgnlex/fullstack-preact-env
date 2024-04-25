
const Node = (props) => {
  return (
    <div 
      id={props.id} 
      class={"node " && props.class} 
      style={props.style}
    >
      {props.children}
    </div>
  )
}

export {Node};