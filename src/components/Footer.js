import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/purchase">Purchase</Link>
            </div>

            <p className="footer-text">Tiana Wilson &copy; 2026</p>
        </footer>
    );
}