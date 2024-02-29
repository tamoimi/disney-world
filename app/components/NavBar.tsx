import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="flex justify-between p-5 items-center lg:px-72">
          <Link href="/" className="">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Disney
            </span>
          </Link>

          <div className="" id="navbar-default">
            <ul className="font-medium flex gap-4 lg:gap-20">
              <li>
                <Link href="#" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
