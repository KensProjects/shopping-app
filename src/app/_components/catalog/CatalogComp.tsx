'use client'

import catalogData from "../.././catalogData.json"
import CatalogItem from "./CatalogItem";
import { type Catalog } from "~/app/types/Catalog";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CatalogComp() {

    const [catalog, setCatalog] = useState<Catalog[]>([])
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get("q") ?? ""
    const filteredCatalog =  catalogData.filter(({ name }: Catalog) => (
        name.includes(searchQuery))
    )

    useEffect(() => {
        setCatalog(filteredCatalog)
    }, [])

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 p-4 w-full h-full">
            {catalog.map(({ name, price, imageSrc }: Catalog) => (
                <li key={name} className="flex justify-center items-center h-60">
                    <CatalogItem name={name} price={price} imageSrc={imageSrc} quantity={0}/>
                </li>
            ))}
        </ul>
    );
}
