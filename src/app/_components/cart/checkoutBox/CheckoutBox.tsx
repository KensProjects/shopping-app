'use client'

import { useState } from "react"
import CartTotal from "./CartTotal"
import useCart from "~/hooks/useCart"
import OrderTypeScreen from "./OrderTypeScreen"
import ConfirmationScreen from "./ConfirmationScreen"

export default function CheckOutBox() {

    const { cartLoading } = useCart()

    const checkoutBoxComponents = [<CartTotal />, <OrderTypeScreen />, <ConfirmationScreen />]

    const [checkoutBoxStateIndex, setCheckoutBoxStateIndex] = useState(0)

    const currentCheckBoxState = checkoutBoxComponents[checkoutBoxStateIndex]

    function goToNextScreen() {
        setCheckoutBoxStateIndex(oldIndex => {
            if (oldIndex < 2) {
                return oldIndex + 1
            }
            return oldIndex
        })
    }
    function goToPreviousScreen() {
        setCheckoutBoxStateIndex(oldIndex => {
            if (oldIndex === 0) {
                return oldIndex
            }
            return oldIndex - 1
        })
    }
    const beginningScreen = checkoutBoxStateIndex === 0
    const lastScreen = checkoutBoxStateIndex === 2
    const middleScreen = checkoutBoxStateIndex === 1

    if (cartLoading) return null

    return (
        <div className="sticky top-0 flex flex-col justify center sm:justify-between items-center border border-gray-400 w-full lg:w-96 h-full lg:h-80 rounded-lg gap-2 overflow-hidden p-2 bg-white">
            {currentCheckBoxState}
            <div className={`button-group flex items-center w-full h-fit justify-center ${middleScreen && "justify-center gap-20"}`}>
                {!beginningScreen &&<button className="flex justify-center items-center w-24 h-10 bg-blue-500 rounded-full text-white hover:bg-blue-600 duration-75 ease-in-out gap-4" onClick={() => goToPreviousScreen()}>Go Back</button>}
                {!lastScreen && <button className="flex justify-center items-center w-24 h-10 bg-blue-500 rounded-full text-white hover:bg-blue-600 duration-75 ease-in-out" onClick={() => goToNextScreen()}>Next</button>}
            </div>

        </div>
    )
}
