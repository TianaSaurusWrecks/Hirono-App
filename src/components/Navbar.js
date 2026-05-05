import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            if (search.trim() !== "") {
                router.push(`/search?q=${search}`);
            }
        }
    };


    return (
        <nav className="navbar">
            <h2>Hirono Collection</h2>

              {/* searchbar */}
        <input
            type="text"
            placeholder="Search figures..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            className="nav-search"

        />


            <div>
                <Link href="/">Home</Link>
                <Link href="/series">Series</Link>
                <Link href="/collection">Collection</Link>
                <Link href="/wishlist">Wishlist</Link>
                
            </div>

      
        </nav>
    )
}