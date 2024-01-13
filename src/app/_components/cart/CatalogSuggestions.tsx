'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import type { Catalog } from "~/app/types/Catalog"
import useCart from "~/hooks/useCart"

export default function CatalogSuggestions({ suggestions }: { suggestions: Catalog[] }) {

    const { replaceSpaces } = useCart()

    const [suggestionData, setSuggestionData] = useState<Catalog[]>([])

    useEffect(() => {
        setSuggestionData(suggestions)
    }, [])

    return (
        <ul className="flex justify-center items-center mt-4 w-full">
            {suggestionData.map(({ name,imageSrc }: Catalog) => {

                const fixedName = replaceSpaces(name)

                return <Link className="border border-black h-20 w-60 flex justify-center items-center" key={name} href={`/catalog/${fixedName}`}>
                    <div className="suggestion flex flex-col justify-center items-center">
                    <Image src={imageSrc} alt={""} width={40} height={40}/>
                    <span className="font-medium">{name}</span>
                    </div>
                
                    </Link>
            })}
        </ul>
    )
}