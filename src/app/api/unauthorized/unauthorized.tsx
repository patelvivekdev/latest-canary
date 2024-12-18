import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center space-y-4 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600">401 - Unauthorized</h1>
        <p className="text-gray-600 text-lg">
          Please log in to access this page.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Go back to home
        </Link>
      </div>
    </main>
  );
}
