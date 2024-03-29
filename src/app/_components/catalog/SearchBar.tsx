'use client'
import { useRouter } from "next/navigation"
import { type FormEvent, useState } from "react"
import catalogData from "../../catalogData.json"
import Link from "next/link"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { env } from "~/env.js"

export default function SearchBar() {

    const { data: session } = useSession()

    const [searchTerm, setSearchTerm] = useState("")
    
    const router = useRouter()

    function handleSearchCatalog(e: FormEvent) {
        e.preventDefault()
        router.push(`${env.NEXT_PUBLIC_BASE_URL}/catalog?q=${searchTerm}`)
    }

    const searchSuggestions = catalogData.filter(({ name }) => (
        name.includes(searchTerm)
    ))

    const activeSearch = (searchTerm !== "")

    function clearSearchTerm() {
        setSearchTerm("")
    }

    if (!session) return null

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <form onSubmit={handleSearchCatalog} className="relative flex justify-between items-center border-none outline-none ring-1 rounded-full overflow-hidden h-10 bg-white text-black px-2 sm:w-10/12">
                <input type="search" name="catalog-item" id="catalog-search-bar" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full h-full outline-none border-none px-2" placeholder="Search catalog..." />
                <button type="submit" className="p-1">
                    <Image src={'/magnifying-glass.svg'} alt={"Search"} width={20} height={20} />
                </button>
            </form>

            {activeSearch &&
                <ul className="absolute justify-center top-24 items-center text-black flex flex-col w-full">
                    {searchSuggestions.map(({ name }) => (
                        <li key={name} className="hover:bg-gray-200 bg-white w-52 flex justify-center items-center border-black border z-40">
                            <Link className="w-full h-full flex justify-center items-center" href={`${process.env.NEXT_PUBLIC_BASE_URL}/catalog?q=${name}`} onClick={() => clearSearchTerm()}>{name}
                            </Link>
                        </li>
                    ))}
                </ul>
            }
        </div>

    )
}
