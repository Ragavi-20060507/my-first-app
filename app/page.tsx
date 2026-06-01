import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-200">

      <h1 className="text-5xl font-bold">
        My First Next App
      </h1>

      <p className="mt-4">
        Learning Next.js
      </p>

      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded">
        Press Me
      </button>

    </div>
  );
}