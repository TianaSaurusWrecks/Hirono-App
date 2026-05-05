import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>Oops! That page doesn’t even go here!</h1>

      <Image className="notfound-img"
        src="/images/404.jpg"
        width={1000}
        height={800}
        alt="Not Found"
        unoptimized
        />

      <p>404 Error - Page not found</p>

      <Link href="/" className="button">
        Go Home
      </Link>
    </div>
  );
}