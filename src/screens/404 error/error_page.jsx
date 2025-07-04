import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="bg-white w-screen h-screen flex items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-3xl text-blue-600 lg:text-7xl">
            404
          </h1>
          <h6 className="mb-4 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page Not Found
          </h6>
          <p className="mb-4 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>
          <Link
            to="/discover"
            className="px-5 py-2 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}