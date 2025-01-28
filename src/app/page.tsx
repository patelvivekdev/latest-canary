import Link from "next/link";

export default async function Home() {
  // const userNames = ["patelvivekdev", "vercel", "nextjs"];
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 pb-20 gap-16 sm:p-20">
      {/* <div className="flex flex-row items-center justify-center gap-4">
        {userNames.map((userName) => (
          <Link
            key={userName}
            href={`/user/${userName}`}
            className="px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors duration-200t"
          >
            {userName}
          </Link>
        ))}
      </div> */}
      <div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/authorized"
            className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200"
          >
            Authorized Page
          </Link>
          <Link
            href="/unauthorized"
            className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
          >
            Unauthorized Page
          </Link>
          <Link
            href="/api/authorized"
            className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
          >
            Authorized API
          </Link>
          <Link
            href="/api/unauthorized"
            className="px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors duration-200"
          >
            Unauthorized API
          </Link>
        </div>
      </div>
    </div>
  );
}
