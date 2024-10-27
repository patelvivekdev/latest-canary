export default function Loading() {
  return (
    <>
      <p>Loading from loading.tsx</p>
      <div className="flex flex-row justify-center items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
        <div className="h-7 w-48 bg-gray-200 rounded animate-pulse" />
      </div>
    </>
  );
}
