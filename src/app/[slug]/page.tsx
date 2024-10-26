import Image from "next/image";
import { Suspense } from "react";
import { unstable_cacheLife as cacheLife } from "next/cache";
import { notFound } from "next/navigation";

async function getUser(userName: string) {
  "use cache";
  cacheLife("hours"); // Cache for hours, adjust as needed
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`https://api.github.com/users/${userName}`);
  if (!res.ok) return null;
  return res.json();
}

export async function generateStaticParams() {
  // Return an array of objects representing your dynamic routes
  // For example:
  return [{ slug: "patelvivekdev" }, { slug: "vercel" }, { slug: "nextjs" }];
}

async function UserProfile({ userName }: { userName: string }) {
  const user = await getUser(userName);
  if (!user) return notFound();

  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <Suspense
        fallback={
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
            <div className="h-7 w-48 bg-gray-200 rounded animate-pulse" />
          </div>
        }
      >
        <Image
          className="rounded-full"
          src={user.avatar_url}
          alt={user.name || "User avatar"}
          width={48}
          height={48}
        />
        <h1 className="text-lg sm:text-xl font-semibold">
          Welcome, {user.name || userName}
        </h1>
      </Suspense>
    </div>
  );
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <>
      <h1 className="text-4xl text-center mb-8">This is static part</h1>
      <Suspense
        fallback={
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
            <div className="h-7 w-48 bg-gray-200 rounded animate-pulse" />
          </div>
        }
      >
        <UserProfile userName={slug} />
      </Suspense>
    </>
  );
}
