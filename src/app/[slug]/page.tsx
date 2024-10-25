import { connection } from "next/server";
import { Suspense } from "react";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  await connection();
  const res = await fetch(`https://api.github.com/users/${slug}`);
  const user = await res.json();

  return (
    <>
      <h1>This is static</h1>
      <Suspense fallback={<p>Loading User...</p>}>
        <h1>{user.name}</h1>
      </Suspense>
    </>
  );
}
