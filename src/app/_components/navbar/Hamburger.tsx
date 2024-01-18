'use client'

import { useAtom } from "jotai"
import { mobileViewAtom } from "~/atoms/navbarAtom"

export default function Hamburger() {

    const [, setMobileToggleIsActive] = useAtom(mobileViewAtom)

    const slices = new Array(3).fill("")

    return (
        <button className="flex flex-col justify-center items-center gap-2 p-2 w-12 h-12  md:hidden rounded-md z-50 fixed top-20 bg-gray-200 left-2" onClick={() => setMobileToggleIsActive(prev => !prev)}>
            {slices.map((slice, idx) => (
                <span key={idx} className="bg-gray-600 w-full h-1 rounded-full" />
            ))}
        </button>
    )
}
