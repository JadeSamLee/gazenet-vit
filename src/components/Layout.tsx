
import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Eye } from "lucide-react";

const Layout = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-8 border-b border-gray-100 glass sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-teal-600 transition-all duration-300 hover:opacity-80">
            <Eye className="h-6 w-6" />
            <span className="text-xl font-semibold">GazeNet</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" current={location.pathname}>Home</NavLink>
            <NavLink to="/classify" current={location.pathname}>Classify</NavLink>
            <NavLink to="/about" current={location.pathname}>About</NavLink>
          </nav>
          
          <div className="md:hidden">
            {/* Mobile menu placeholder */}
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto py-8 px-4">
        {mounted && <Outlet />}
      </main>
      
      <footer className="border-t border-gray-100 py-8 bg-white/50">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} GazeNet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ to, current, children }: { to: string; current: string; children: React.ReactNode }) => {
  const isActive = current === to || (current.startsWith(to) && to !== "/");
  
  return (
    <Link
      to={to}
      className={`relative py-2 transition-colors duration-300 ${
        isActive 
          ? "text-teal-600 font-medium" 
          : "text-gray-600 hover:text-teal-600"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 rounded-full animate-fade-in" />
      )}
    </Link>
  );
};

export default Layout;
