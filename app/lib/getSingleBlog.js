export default async function getSingleBlog(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return await result.json();
}
