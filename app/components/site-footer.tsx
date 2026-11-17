import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" href="/">
        DERBROYAL <span>LIMITED</span>
      </Link>
      <p>Hair, beauty & a little bit of magic.</p>
      <Link className="back-to-top" href="/">
        Back to home <span aria-hidden="true">↑</span>
      </Link>
      <small>© DERBROYAL LIMITED</small>
    </footer>
  );
}
