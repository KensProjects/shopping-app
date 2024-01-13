'use client'

import type { Catalog } from "~/app/types/Catalog"
import Image from "next/image"
import CartItemQuantityControls from "./CartItemQuantityControls"
import CartItemButton from "./CartItemButton"
import Link from "next/link"
import useCart from "~/hooks/useCart"

export default function CartItem({ name, price, imageSrc, quantity }: Catalog) {

    const { deleteCartItem, replaceSpaces, fixPrice } = useCart()

    const totalPrice = price * quantity!

    const cartItemName = replaceSpaces(name)
    const cartItemPrice = fixPrice(totalPrice)
    return (

        <div className="flex rounded-sm justify-between items-center h-60 w-full p-2">
            <div className="item-icon flex flex-col justify-center items-center w-full h-full">
                <Link href={`/catalog/${cartItemName}`}>
                    <Image src={imageSrc} alt={name} width={65} height={65} />
                </Link>

                <span className="item-name text-xl">{name}</span>
                <span className="item-price text-lg">{cartItemPrice}</span>
                <CartItemQuantityControls name={name} price={price} imageSrc={imageSrc} quantity={quantity} />
                <div className="flex justify-center items-center text-white bg-red-600 rounded-full w-28 h-8 px-2 gap-1" onClick={() => deleteCartItem({ name })}>
                    <span className="text-sm">Remove</span>
                    <CartItemButton icon="/x.svg" />
                </div>
            </div>
            <p className="flex justify-center items-center text-center p-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel laudantium quo consequuntur delectus similique modi! Laudantium?</p>
        </div>
    )
}

