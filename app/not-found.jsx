import { SiteShell } from "../src/components/GoogleAdsSite";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="blog-page">
        <section className="blog-hero">
          <p className="ads-eyebrow">404</p>
          <h1>Page not found.</h1>
          <p>The page you are looking for is not available.</p>
          <a className="blog-back" href="/">Go home</a>
        </section>
      </main>
    </SiteShell>
  );
}
