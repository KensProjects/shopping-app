'use client'

import useCart from '~/hooks/useCart'
import Image from 'next/image'

export default function CheckOutBox() {

    const { cartTotal, cartSubTotal } = useCart()

    return (
        <div className='flex flex-col justify-center items-center h-full w-full'>
            <div id="subtotal-block" className='flex flex-col justify-center items-center w-full h-full gap-4'>
                <h2 className='text-lg'>Subtotal: ${cartSubTotal.toFixed(2)}</h2>
                <p className='font-light'>Sales Tax = 5.3%</p>
                <p className='text-lg font-bold'>Total: {cartTotal}</p>
                <div className='flex justify-center items-center'>
                   <Image src={'/visa-logo.svg'} alt={'VISA'} width={60} height={60}/>
                    <p>ending in <strong>1234</strong></p>
                </div>
            </div>
        </div>
    )
}