import Link from "next/link";

export default function About()
{
    return(
        <div>
            <>
            This is About Page
            </>

            <Link href="/services">
                Services
            </Link>

            <Link href="/">
                Home
            </Link>

            
        </div>
    )
}