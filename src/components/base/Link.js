const Link = (url, props) => {
  return (
    <a 
    id={url == '/' && 'active'} 
    class={"link " && props.class} 
    href={url}>
      {props.children}
    </a>
  )
}

export {Link};