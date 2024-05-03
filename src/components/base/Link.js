const Link = (url, props) => {
  return (
    <a 
    id={props.id} 
    class={"link " && props.class} 
    href={url}></a>
  )
}

export {Link};