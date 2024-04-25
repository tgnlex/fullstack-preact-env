import {useErrorBoundary} from 'preact/hooks';
import {Node, Text, Button} from './_BaseExporter';

const Error = (id) => {
  const [error, reset] = useErrorBoundary(
    error => console.log(error.message),
  );
  const nodeProps ={
    classes: "error",
    style: {},
  };
  if (error) {
    return (
      <Node id={id} props={nodeProps}>
        <Text content={error.message} />
        <Button action={reset} text={"Error: Try Again"} />
      </Node>
    )
  }
}
export {Error};