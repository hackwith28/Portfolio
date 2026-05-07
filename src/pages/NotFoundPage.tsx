import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 • Reetesh Sahu</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="container-max py-24">
        <div className="glass noise rounded-2xl p-8 sm:p-10">
          <p className="font-mono text-sm text-fg-muted">404</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            That page doesn’t exist.
          </h1>
          <p className="mt-3 max-w-prose text-fg-muted">
            Let’s get you back to the portfolio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/">Go home</Link>
            </Button>
            <Button asChild variant="secondary">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

