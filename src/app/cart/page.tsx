import Container from "../_components/Container"
import Cart from "../_components/cart/Cart"
import CheckoutBox from "../_components/cart/checkoutBox/CheckoutBox"

export default function CartPage() {
  return (
    <Container column_flow={true} extra_styling="lg:flex-row-reverse gap-2 relative w-full h-full justify-between items-center lg:items-start">
      <CheckoutBox />
      <Cart />
    </Container>
  )
}
