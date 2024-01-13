'use client'
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import useCart from "~/hooks/useCart"

export default function CartIcon() {

    const { cartCount, cartTotal } = useCart()

    const { data: session } = useSession()

    if (!session) return null

    return (
        <Link className="relative flex flex-col justify-center items-center w-20 h-16 rounded-lg bg-emerald-500 text-sm" href={"/cart"}>
            <span id="item-count" className="absolute top-0 right-0 w-7 h-7 rounded-full bg-red-500 flex justify-center items-center text-sm overflow-hidden">
                {cartCount}
            </span>
            <Image src={'/cart.svg'} alt={""} height={30} width={30} />
            <span id="cart-total">{cartTotal}</span>
        </Link>
    )
}
