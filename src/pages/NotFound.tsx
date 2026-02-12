// pages/NotFound.tsx
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-neutral-50 dark:bg-brand-neutral-900 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-6xl sm:text-7xl font-display font-bold text-brand-primary-600 dark:text-brand-primary-400 mb-6 animate-slide-up">
          404
        </h1>
        <p className="text-xl sm:text-2xl font-heading text-brand-neutral-700 dark:text-brand-neutral-300 mb-4 animate-fade-in">
          Oops! The page you’re looking for does not exist.
        </p>
        <p className="text-base sm:text-lg text-brand-neutral-500 dark:text-brand-neutral-400 mb-8">
          It seems you might have entered an invalid URL or the page has moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-brand-primary-600 hover:bg-brand-primary-700 text-white font-medium rounded-xl px-6 py-3 shadow-soft transition-all duration-300 animate-slide-up"
        >
          Return Home
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
