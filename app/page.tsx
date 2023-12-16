import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-2 p-5 bg-slate-800 w-full max-w-xs rounded-lg">
        <div className="text-center my-4 ">
          <h1>string</h1>
        </div>
        <div>
          <Link
            href="/signin"
            className="bg-slate-900 rounded-lg p-3 block my-4"
          >
            signin
          </Link>
        </div>
        <div>
          <Link
            href="/signup"
            className="bg-slate-900 p-3 block rounded-lg my-4"
          >
            signup
          </Link>
        </div>
      </div>
      ;
    </main>
  );
}
