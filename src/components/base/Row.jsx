const style = {display: "flex", flexDirection: "row"};

const Row = (props) => {
      return (
      <div id={props.id} class={props.class} style={style && props.style}>
        {props.children}
      </div>
    )
}

export {Row};