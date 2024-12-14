import { unauthorized } from "next/navigation";

export default async function DashboardPage() {
  const session = false;

  if (!session) {
    unauthorized();
  }

  // Render the dashboard for authenticated users
  return (
    <main>
      <h1>This will not be rendered</h1>
    </main>
  );
}
