import { unauthorized } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = true;

  if (!session) {
    unauthorized();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Welcome to the dashboard! 🎉
          </h1>

          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
          >
            ← Back to Home
          </Link>

          <p className="text-gray-600 text-lg leading-relaxed">
            This is a protected page. Only authenticated users can access this
            page.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                Quick Stats
              </h2>
              <p className="text-blue-600">Your dashboard overview goes here</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                Recent Activity
              </h2>
              <p className="text-green-600">Your recent actions appear here</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
