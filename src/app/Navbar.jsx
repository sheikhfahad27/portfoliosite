import Image from "next/image";
import img1 from "../../public/assets/Capture-removebg-preview.png";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-sky-950 p-4 z-30 py-3 top-0 left-0 w-full  fixed">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <Link  href={"/"} className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
                <Image src={img1} className="w-16" />
                <span className="font-semibold text-xl hover:text-blue-500">
                  Web Jinous Hub{" "}
                </span>
            </Link>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                <svg
                  className="h-3 w-3 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path
                    fillRule="evenodd"
                    d="M3 3.5A.5.5 0 013.5 3h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM3.5 8a.5.5 0 000 1h13a.5.5 0 000-1h-13zm0 5a.5.5 0 000 1h13a.5.5 0 000-1h-13z"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-x-3 ">
                <div className="block lg:inline-block mt-4 lg:mt-0 text-white hover:text-blue-500 mr-4">
                  <Link href="./home">Home</Link>
                </div>
                <Link href={"./About"}>
                  <div className="block lg:inline-block mt-4 lg:mt-0 hover:text-blue-500 text-white mr-4">
                    About
                  </div>
                </Link>

                <Link href={"./Project"}>
                  <div className="block lg:inline-block mt-4 lg:mt-0 hover:text-blue-500 text-white mr-4">
                    Project
                  </div>
                </Link>

                <Link href={"./Contact"}>
                  <div className="block lg:inline-block mt-4 lg:mt-0 hover:text-blue-500 text-white">
                    Contact
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
