import Image from "next/image"

export default function CartItemButton({ onClick, icon }: { onClick?: () => void, icon: string }) {
    return (
        <button onClick={onClick} >
            <Image src={icon} alt={""} className="catalog-item-buttons flex justify-center items-center" width={18} height={18} />
        </button>
    )
}
