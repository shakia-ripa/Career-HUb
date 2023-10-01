import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="h-[900px] flex justify-center items-center">
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-4xl font-semibold">Oops!</h1>
                <p className="text-xl">Sorry, an unexpected error has occurred.</p>
                <p className="text-2xl">
                    <i>
                        {error.statusText || error.message}
                    </i>
                </p>
                <Link to='/'>
                    <button className="btn">
                        Go back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;