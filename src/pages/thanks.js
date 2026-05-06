import Link from "next/link";

export default function Thanks() {
  return (
    <div className="page">
      <h1 className="collection">Thanks for your Message!</h1>
      <p className="about-text">
        I really appreciate you reaching out to me and I will get back to you as
        soon as I can.
      </p>

      <div className="home-btn-wrapper">
        <Link href="/" className="home-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
