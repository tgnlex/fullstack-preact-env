const Text = (content, props) => {
  const text = `${content}`;
  return (
    <p 
      id={props.id} 
      class={props.class} 
      style={props.style}
      ref = {props.ref}
      >
        {text}
      </p>
  )
}

export {Text};