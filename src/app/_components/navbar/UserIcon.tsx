'use client'
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function UserIcon() {

  const [isActive, setIsActive] = useState(false)

  const { data: session } = useSession()

  const userImage = session?.user.image

  function handleOnBlur() {
    setTimeout(() => {
      setIsActive(false)
    }, 150)
  }
  
  if (!session || !session.user || !session.user.name) return null

  return (
    <div className="flex flex-col justify-center items-center">
      <button onClick={() => setIsActive(prev => !prev)} onBlur={() => handleOnBlur()} className="flex flex-col justify-center items-center gap-2 relative">
        <div
          className="flex flex-col justify-center items-center border border-black w-10 h-10 rounded-full bg-white text-black text-sm overflow-hidden relative">

          {userImage && <img src={userImage} alt={session.user.name} width={10} height={10} className="w-full h-full flex justify-center items-center" />}

        </div>

      </button>

      {isActive && (
        <div className="w-32 h-16 bg-white border border-black absolute top-24 right-2 text-gray-600 flex flex-col justify-between items-center text-md z-50" >
          <Link className="hover:font-bold duration-75 ease-in-out" href={'/api/auth/signout'}>Signout</Link>
          <Link href={'/account'} className="flex justify-center items-center w-full hover:font-bold duration-75 ease-in-out">
            <Image src={"/user.svg"} alt={""} width={15} height={15} />
            <span>Account</span>
          </Link>
        </div>
      )}
    </div>


  )
}
