import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex flex-row justify-center bg-amber-500 py-4 px-5">
      <div className=" mx-5 flex-1 font-bold sticky top-0">
        <Link href='/'>
          <a>Header</a>
        </Link>
      </div>
      <div className="mx-2 px-2 hover:font-bold">
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
      <div className="mx-2 px-2 hover:font-bold">
        <Link href='/about'>
          <a>About</a>
        </Link>
      </div>
    </div>
  )
};
