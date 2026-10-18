import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap notfound">
      <h1>This page isn’t here.</h1>
      <p className="lede">The link may be old, or the address mistyped. The studio’s pages start from the home page.</p>
      <Link className="link link--brass" href="/">Go to the home page</Link>
    </section>
  );
}
