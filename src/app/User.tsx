import Image from "next/image";
import { connection } from "next/server";

async function getUser({ userName } = { userName: "string" }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const user = await res.json();
  return user;
}

export default async function getUserInfo({
  userNames,
}: {
  userNames: string[];
}) {
  await connection();
  // get the random user name from the list
  const userName = userNames[Math.floor(Math.random() * userNames.length)];
  const user = await getUser({ userName });

  return (
    <header className="row-start-1 flex items-center gap-4">
      <Image
        className="rounded-full"
        src={user.avatar_url}
        alt="Vivek Patel"
        width={48}
        height={48}
      />
      <h1 className="text-lg sm:text-xl font-semibold">Welcome, {user.name}</h1>
    </header>
  );
}
