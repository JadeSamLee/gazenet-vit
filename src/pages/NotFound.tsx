
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { FolderX, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center glass rounded-xl p-12 max-w-md animate-fade-in">
        <FolderX className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center"
        >
          <Home className="mr-2 h-4 w-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
