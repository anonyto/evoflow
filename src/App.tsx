import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import { useLocation } from "react-router-dom";
import { Toaster } from "sonner";

function ServiceDetailWrapper() {
  const location = useLocation();
  return <ServiceDetail key={location.pathname} />;
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="services/:slug"
                element={<ServiceDetailWrapper />}
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>

          <Toaster
            position="bottom-right"
            richColors
            toastOptions={{
              classNames: {
                toast: `
                  rounded-2xl
                  border border-brand-neutral-200 dark:border-brand-neutral-700
                  bg-white dark:bg-brand-neutral-900
                  text-brand-neutral-900 dark:text-white
                  shadow-medium
                  px-5 py-4
                  animate-slide-up
                `,
                title: `
                  font-heading font-semibold
                  text-sm
                `,
                description: `
                  text-sm
                  text-brand-neutral-600 dark:text-brand-neutral-300
                `,
                success: `
                  border-l-4 border-l-brand-primary-600
                `,
                error: `
                  border-l-4 border-l-brand-secondary-600
                `,
                actionButton: `
                  bg-brand-primary-600 text-white
                  hover:bg-brand-primary-700
                  rounded-lg
                  px-3 py-1.5
                  text-xs font-medium
                `,
                cancelButton: `
                  bg-brand-neutral-100 dark:bg-brand-neutral-800
                  text-brand-neutral-700 dark:text-brand-neutral-200
                  rounded-lg
                  px-3 py-1.5
                  text-xs
                `,
              },
            }}
          />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
