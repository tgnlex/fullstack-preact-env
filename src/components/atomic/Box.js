import { QueryBuilder } from "drizzle-orm/mysql-core";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const Box = ({props, id, height, width, color}) => {
  const boxStyle = {
    backgroundColor: color || props.color,
    height: height || props.height, 
    width: width || props.width,
    border: "2px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

    return (
    <div id={id || props.id} 
    style={props.style || boxStyle} 
    class={props.class ||"box"} >
      {props.item}
      {props.children}
    </div>
  )
  }

export {Box};