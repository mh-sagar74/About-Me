import Todo from "./components/Todo";

export default function Home() {
  return (
    <div className="items-center justify-items-center p-8 gap-16 pt-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-semibold">Home Directory</h1>
      <div>
        <Todo />
      </div>
    </div>
  );
}
