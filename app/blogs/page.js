import Link from "next/link";
import getBlogs from "../lib/getBlogs";
import { v4 as uuidv4 } from "uuid";

export default async function AllBlogsPage() {
  const allBlogs = await getBlogs();
  return (
    <div className="items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-semibold">All Blogs</h1>
      <ul>
        {allBlogs.map((blog) => (
          <li className="m-1" key={uuidv4()}>
            &#x2022; <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
