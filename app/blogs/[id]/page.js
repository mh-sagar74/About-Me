import getSingleBlog from "@/app/lib/getSingleBlog";

export default async function BlogPage({ params }) {
  const { id } = params;
  const singleBlog = await getSingleBlog(id);
  return (
    <div className="items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-xl m-6">Blog-{id}</h1>
      <div className="flex flex-col">
        <h1>
          <span className="font-bold">Title : </span>
          {singleBlog.title}
        </h1>
        <h1>
          <span className="font-bold">Details : </span>
          {singleBlog.body}
        </h1>
      </div>
    </div>
  );
}
