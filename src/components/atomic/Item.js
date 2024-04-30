const Item = (props) => {
  return (
    <div 
      id={props.id} 
      style={props.style}
      ref={props.ref}
      class={"item " && props.class} 
    />
  )
}
export {Item};