import type { Catalog } from "~/app/types/Catalog";
import { api } from "~/trpc/react";
import catalogData from "../app/catalogData.json"
import toast from "react-hot-toast";
import { useMemo } from "react";

export default function useCart() {

    function replaceSpaces(string: string) {
        return string.replace(" ", "-")
    }

    function replaceHyphens(string: string) {
        return string.replace("-", " ")
    }

    function fixPrice(price: number) {
        return `$${price.toFixed(2)}`
    }

    const catalogSuggestions = useMemo(() => catalogData.sort(() => 0.5 - Math.random()).slice(6), [catalogData]) as Catalog[]

    const { data: cartItems, isLoading: cartLoading } = api.cart.getCart.useQuery()

    const initialCartSubTotal = useMemo(() => cartItems?.reduce((sum, item) => sum + item.quantity * item.price, 0), [cartItems])

    const cartSubTotal = useMemo(() => initialCartSubTotal ? (initialCartSubTotal) : 0, [initialCartSubTotal])

    const cartTotal = useMemo(() => `$${cartSubTotal && ((cartSubTotal) + (5.3 / 100 * cartSubTotal)).toFixed(2)}`, [cartSubTotal])

    const initialCartCount = useMemo(() => 0, [])

    const cartCount = useMemo(() => cartItems ? cartItems.reduce((total, item) => total + item.quantity, initialCartCount) : initialCartCount, [cartItems])

    const utils = api.useUtils()

    function refreshCartItems(successMessage: string) {
        utils.cart.invalidate().then(() => toast.success(successMessage)).catch(() => toast.error("Error updating cart!"))
    }

    const { mutate: deleteCartItem } = api.cart.deleteCartItem.useMutation(
        {
            onSuccess: () => {
                refreshCartItems("Item removed from cart!")
            }
        }
    )
    const { mutate: decreaseQuantity } = api.cart.decreaseCartItemQuantity.useMutation({
        onSuccess: () => {
            refreshCartItems("Item removed from cart!");
        }
    })

    const { mutate: increaseQuantity } = api.cart.increaseCartItemQuantity.useMutation(
        {
            onSuccess: () => {
                refreshCartItems("Item added to cart!");
            }
        }
    )
    return { cartSubTotal, cartTotal, cartCount, cartItems, cartLoading, catalogSuggestions, deleteCartItem, decreaseQuantity, increaseQuantity, replaceSpaces, replaceHyphens, fixPrice }
}
