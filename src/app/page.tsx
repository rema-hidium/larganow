import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Next.js
        </h1>
        <p className="text-gray-600">
          Get started by editing <code className="bg-gray-200 px-2 py-1 rounded">src/app/page.tsx</code>
        </p>
      </div>
    </div>
  );
}
