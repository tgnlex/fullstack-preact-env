import {useErrorBoundary} from 'preact/hooks';

const Error = (id) => {
  const [error, reset] = useErrorBoundary(
    error => console.log(error.message),
  );
  if (error) {
    return (
      <div id={id} className="error">
        <Text content={error.message} />
        <Button action={reset} text={"Error: Try Again"} />
      </div>
    )
  }
}
export {Error};