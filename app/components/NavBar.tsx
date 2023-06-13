import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between p-2 bg-white">
      <Link className="text-2xl font-bold text-gray-700" href="/">
        OpenTable
      </Link>
      <div>
        <div className="flex">
          <button className="p-1 px-4 mr-3 text-white bg-blue-400 border rounded">
            Sign In
          </button>
          <button className="p-1 px-4 text-black border rounded">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
