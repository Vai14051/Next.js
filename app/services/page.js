import Link from "next/link"


export default function services()
{
        return(
            <div>
                <>
                    This is Services Page 
                </>
                <Link href="/About">
                    About
                </Link>

                <Link href="/">
                    Home
                </Link>
            </div>
        )
}