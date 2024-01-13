'use client'
import Image from "next/image"
import type { Catalog } from "~/app/types/Catalog"
import useCart from "~/hooks/useCart"
import Link from "next/link"
export default function CatalogItem({ name, price, imageSrc }: Catalog) {

    const { increaseQuantity, replaceSpaces,fixPrice } = useCart()

    const fixedName = replaceSpaces(name)
    const itemPrice = fixPrice(price)

    return (
        <div className="flex flex-col bg-gray-100 justify-between items-center h-full w-64 p-2 rounded-xl gap-1">
            <Link href={`/catalog/${fixedName}`}>
                <Image src={imageSrc} alt={name} width={100} height={100} />
            </Link>
            <span className="item-name text-2xl">{name}</span>
            <span className="item-price text-xl">{itemPrice}</span>
            <div className="catalog-item-buttons flex justify-center items-center">
                <button className="bg-green-300 hover:bg-green-400 duration-75 ease-in-out w-32 h-8 rounded-lg text-slate-700 flex justify-center items-center" onClick={() => increaseQuantity({ name, price, imageSrc })}>Add to Cart</button>
            </div>

        </div>
    )
}
