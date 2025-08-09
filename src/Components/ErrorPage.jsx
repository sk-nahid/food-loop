
import React from "react";
import { Link } from "react-router";

const ErrorPage = ({ code = 404, title = "Page not found", message }) => {
  const defaultMessage =
    code === 404
      ? "We couldn't find the page you're looking for. Maybe it moved or the URL is incorrect."
      : "Something went wrong on our side. Try refreshing or come back later.";

  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-4xl w-full bg-white dark:bg-base-100 shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">
        {/* Illustration / left */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/5 p-8">
          <svg
            width="240"
            height="240"
            viewBox="0 0 24 24"
            fill="none"
            className="text-primary"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12h10V2z" fill="currentColor" opacity="0.12" />
            <path d="M12 22c5.52 0 10-4.48 10-10h-10v10z" fill="currentColor" opacity="0.08" />
            <path d="M11 6h2v8h-2z" fill="currentColor" />
            <path d="M11 16h2v2h-2z" fill="currentColor" />
          </svg>
        </div>

        {/* Content / right */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-4">
            <p className="text-sm text-secondary font-semibold">Uh oh — an error occurred</p>
          </div>

          <h1 className="text-6xl font-extrabold text-primary leading-tight">
            {code}
          </h1>

          <h2 className="mt-2 text-2xl font-bold text-text">{title}</h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {message || defaultMessage}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Link
              to="/"
              className="btn btn-primary btn-md inline-flex items-center gap-2"
              aria-label="Go to home page"
            >
              ← Home
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="btn btn-outline btn-md"
              aria-label="Reload page"
            >
              Reload
            </button>

            <div className="ml-0 sm:ml-auto text-sm text-gray-500">
              <p>If the problem persists, contact support at <a href="mailto:support@foodloopbd.org" className="text-primary underline">support@foodloopbd.org</a></p>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-400">
            <p>Tip: check the URL for typos or try searching from the homepage.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
