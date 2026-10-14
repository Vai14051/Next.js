import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <div>
    Home page
   </div>

   <Link href="/About">About</Link>


    <div ><Link href="/blogs">Blogs</Link></div>
   <Link href="/services/seo">SEO</Link>
   </>
  );
}
