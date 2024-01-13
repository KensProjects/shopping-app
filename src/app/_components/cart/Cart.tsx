'use client'

import CartItem from "./CartItem"
import useCart from "~/hooks/useCart"

export default function Cart() {

    const { cartItems } = useCart()

    return (
        <ul className="grid grid-cols-1 justify-center items-center gap-8 w-full md:w-10/12 lg:w-full h-full rounded-lg border border-gray-500 bg-gray-100">
            {cartItems?.map(({ name, price, imageSrc, quantity }) => (
                <CartItem key={name} name={name} price={price} imageSrc={imageSrc} quantity={quantity} />
            ))}
        </ul>
    )
}
