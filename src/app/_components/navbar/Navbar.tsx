import { getServerAuthSession } from "~/server/auth";
import UserIcon from "./UserIcon";
import CartIcon from "./CartIcon";
import SearchBar from "../catalog/SearchBar";
import Hamburger from "./Hamburger";
import Link from "next/link";
import SignInButton from "./SignInButton";

export default async function Navbar() {

  const session = await getServerAuthSession()

  return (
    <nav className="w-full h-24 flex justify-center sm:justify-between items-center bg-blue-600 mb-8 text-white sm:px-8 ">
      <Hamburger />
      <Link href="/" className="text-xl hidden sm:flex">Shopping App</Link>

      <SearchBar />
      <div className="hidden md:flex justify-center items-center w-fit md:gap-8 lg:gap-20">

        {session ?
          <>
          <Link href={'/catalog'} className="bg-yellow-400 w-24 h-12 rounded-xl flex justify-center items-center">Catalog</Link>
            <CartIcon />
            <UserIcon />
          </>
          :
          <SignInButton />}
      </div>

    </nav>
  )
}
