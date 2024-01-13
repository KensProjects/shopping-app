'use client'

import { useAtom } from "jotai"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { mobileViewAtom } from "~/atoms/navbarAtom"
import Image from "next/image"
import useCart from "~/hooks/useCart"

export default function NavbarToggle() {

  const { data: session } = useSession()

  const { cartTotal, cartCount } = useCart()

  const [mobileToggleIsActive, setMobileToggleIsActive] = useAtom(mobileViewAtom)

  const linkStyles = "flex flex-col justify-center items-center w-full h-1/5 border border-black hover:text-red-800 text-2xl hover:text-3xl ease-in-out duration-100"

  if (!mobileToggleIsActive) return null

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center fixed top-0 right-0 bg-black/50 z-50">
      <ul className="w-80 h-full bg-white flex flex-col fixed top-0 right-0 z-50 justify-start items-start border border-black">
        <Image src={"/x.svg"} alt={""} width={50} height={50} className="absolute top-2 right-2 cursor-pointer" onClick={() => setMobileToggleIsActive(false)} />
        <Link onClick={() => setMobileToggleIsActive(false)} className={`${linkStyles} bg-white`} href={"/"}>Home</Link>
        {session && (<>

          <Link onClick={() => setMobileToggleIsActive(false)} className={`${linkStyles} bg-yellow-300`} href={"/catalog"}>Catalog</Link>
          <Link onClick={() => setMobileToggleIsActive(false)} className={`${linkStyles} bg-green-300 `} href={"/cart"}>
            <Image src="/cart.svg" alt="" width={40} height={40}/>
            <div className="flex flex-col justify-center items-center">
              <div className="rounded-full w-8 h-8 text-white bg-red-600 flex justify-center items-center">{cartCount}</div>
              <div>{cartTotal}</div>
            </div>
          </Link>

          <Link onClick={() => setMobileToggleIsActive(false)} className={`${linkStyles} bg-blue-300`} href={"/account"}>Account</Link>

          <Link onClick={() => setMobileToggleIsActive(false)} className={`${linkStyles} bg-purple-300`} href={"/api/auth/signout"}>Signout</Link> </>)}

        {!session && <Link onClick={() => setMobileToggleIsActive(false)} className={`${linkStyles} bg-red-300`} href={"/api/auth/signin"}>Login</Link>}

      </ul>
    </div>
  )
}
