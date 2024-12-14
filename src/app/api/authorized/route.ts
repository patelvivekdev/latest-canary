import { unauthorized } from "next/navigation";

export async function GET() {
  // Verify the user's session
  const session = true;

  // If no session exists, return a 401 and render unauthorized.tsx
  if (!session) {
    unauthorized();
  }

  // If the user is authenticated, render the dashboard
  return new Response("Welcome to the dashboard! 🎉", {
    status: 200,
    headers: {
      "content-type": "text/plain",
    },
  });
}
