import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <>
            <div>Somethis went wrong</div>
            <div>{error.status}</div>
        </>
    )
}
export default Error;