'use client'

import { useAtom } from "jotai"
import { orderDayAtom, orderTimeAtom, orderTypeAtom } from "~/atoms/orderAtoms"
import useCart from "~/hooks/useCart"

export default function ConfirmationScreen() {

    const { cartTotal } = useCart()

    const [orderDay] = useAtom(orderDayAtom)
    const [orderTime] = useAtom(orderTimeAtom)
    const [orderType] = useAtom(orderTypeAtom)

    return (
        <div className="flex justify-center gap-4 items-center flex-col text-center w-full  h-full">
            <h2>Your {orderType} order will be available at {orderTime} on {orderDay}. Your total is {cartTotal}.</h2>
            <button disabled className="bg-gray-200 hover:bg-gray-300 duration-75 ease-in-out cursor-pointer w-60 sm:w-80 lg:w-60 h-12 rounded-full">Confirm Order</button>
        </div>

    )
}
