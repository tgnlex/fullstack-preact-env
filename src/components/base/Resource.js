import {Link, Text} from './_BaseExporter.js';
const Resource = ({props}, url, description) => {
  const style = {
      padding: "0.75rem 1.5rem",
      borderRadius:" 0.5rem",
      textAlign: "left",
      textDecoration: "none",
      color: "#222",
      backgroundColor: "black",
      border:" 1px solid transparent",
    }
  const textProps = {
    style: {color: "white"}
  }
  return (
    
    <Link url={url} style={style} target="_blank" class="link">
      <h2 class="link-title">{props.title}</h2>
      <Text id={"text"} class={"description"} props={textProps} content={description}/>
    </Link>
  )
}

export {Resource};