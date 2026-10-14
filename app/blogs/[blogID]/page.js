import Link from "next/link";

export default async function Blog({params})
{
    const {blogID} = await params;

    return <div>Blog {blogID}
    
        <div>
            <Link href="/blogs/1/comments">Comment</Link>
        </div>
    
    
    </div>
}