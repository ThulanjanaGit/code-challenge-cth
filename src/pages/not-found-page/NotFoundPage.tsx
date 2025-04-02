const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center p-6 mt-20">
        <h1 className="text-6xl font-bold text-fourthColor">404</h1>
        <p className="mt-4 text-2xl text-gray-700">Oops! Page not found.</p>
        <p className="mt-2 text-gray-500">
          The page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-2 text-lg font-semibold text-black bg-fourthColor rounded-full hover:text-white hover:bg-thirdColor"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
