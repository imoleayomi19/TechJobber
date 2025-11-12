"use client";
// import { headers } from "next/headers";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          TechJobber
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/jobs"
            className={`font-medium ${
              pathname === "/jobs"
                ? "text-indigo-600"
                : "text-gray-700 hover:text-indigo-600"
            }`}
          >
            Jobs
          </Link>
          <Link
            href="/companies"
            className={`font-medium ${
              pathname === "/companies"
                ? "text-indigo-600"
                : "text-gray-700 hover:text-indigo-600"
            }`}
          >
            Companies
          </Link>
        </nav>
        <div className="space-x-4 flex items-center">
          <Link
            href="/auth/signin"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/post-job"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 font-medium"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </header>
  );
}
