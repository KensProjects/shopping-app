'use client'

import catalogData from "../../catalogData.json"
import Image from "next/image"
import Container from "~/app/_components/Container"
import CatalogSuggestions from "~/app/_components/cart/CatalogSuggestions"
import useCart from "~/hooks/useCart"

export default function ItemPage({ params }: { params: { item: string } }) {

    const { catalogSuggestions, replaceHyphens, fixPrice, increaseQuantity } = useCart()

    const chosenItem = params.item

    const fixedItem = replaceHyphens(chosenItem)

    const foundItem = catalogData.find(({ name: itemName }) => (
        itemName === fixedItem
    ))

    const itemDoesntExist = foundItem === undefined

    if (itemDoesntExist) return null

    const { name, price, imageSrc } = foundItem

    return (
        <Container column_flow={true} extra_styling="justify-center items-center">
            <div className="flex flex-col border border-black w-full h-fit justify-between items-center p-2 bg-gray-100 gap-2">
                <span className="text-lg font-bold">{name}</span>
                <span className="font-medium">{fixPrice(price)}</span>
                <Image width={200} height={200} src={imageSrc} alt={""} />

                <div id="description" className="flex flex-col gap-2">
                    <h2 className="font-bold underline underline-offset-4">Description</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, cum laborum facilis at impedit repellat excepturi ipsum rerum beatae animi repellendus nam, eveniet similique quos voluptates quas vitae, tempora quidem.
                        Repudiandae ducimus atque deleniti rerum nihil officiis illum harum asperiores eaque, quidem vel maiores modi delectus dolorum explicabo aliquid et veniam cumque eum repellat error quia repellendus. Libero, aut minus.</p>
                </div>
                <button onClick={() => increaseQuantity({ name, price, imageSrc })} className="bg-green-400 w-80 h-12 rounded-lg flex justify-center items-center hover:bg-green-500 duration-100 ease-in-out">Add Item To Cart</button>
            </div>

            <CatalogSuggestions suggestions={catalogSuggestions} />
        </Container>


    )
}

