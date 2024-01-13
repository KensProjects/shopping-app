import type { Catalog } from "~/app/types/Catalog";
import CartItemButton from "./CartItemButton";
import useCart from "~/hooks/useCart";

export default function CartItemQuantityControls({ name, quantity, price, imageSrc }: Catalog) {
    const { decreaseQuantity, increaseQuantity} = useCart()



    return (
        <div className="flex justify-between items-center rounded-full bg-blue-300 w-24 h-8 overflow-hidden px-1.5 mb-2">
            <CartItemButton onClick={() => decreaseQuantity({ name, quantity })} icon="/minus.svg" />
            <span>{quantity}</span>
            <CartItemButton onClick={() => increaseQuantity({ name, price, imageSrc })} icon="/plus.svg" />
        </div>
    )
}