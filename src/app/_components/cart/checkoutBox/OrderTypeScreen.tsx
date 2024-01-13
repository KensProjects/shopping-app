'use client'

import { orderDayAtom, type OrderDaysOptionsTypes, orderDaysOptions, type OrderTypeOptionsTypes, orderTypeOptions, type OrderTimeOptionsTypes, orderTimeOptions, orderTimeAtom,orderTypeAtom } from "~/atoms/orderAtoms"
import Dropdown from "./Dropdown"
import { useAtom } from "jotai"

export default function OrderTypeScreen() {

    const [orderDay, setOrderDay] = useAtom(orderDayAtom)
    const [orderTime, setOrderTime] = useAtom(orderTimeAtom)
    const [orderType, setOrderType] = useAtom(orderTypeAtom)

    const selectFieldStyle = "border border-black p-0.5 rounded-md overflow-hidden"

    const optionFieldStyle = "p-8 w-12 flex justify-center items-center text-center"

    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-1 text-center">
            <h2 className="text-xl font-bold">Order Options</h2>
            <div className="select-container grid grid-cols-3 lg:grid-cols-1 gap-2">

                <Dropdown label={"Day"} value={orderDay} onChange={e => setOrderDay(e.target.value as OrderDaysOptionsTypes)} optionArray={orderDaysOptions} selectStyle={selectFieldStyle} optionsStyle={optionFieldStyle} />

                <Dropdown label={"Type"} value={orderType} onChange={e => setOrderType(e.target.value as OrderTypeOptionsTypes)} optionArray={orderTypeOptions} selectStyle={selectFieldStyle} optionsStyle={optionFieldStyle} />

                <Dropdown label={"Time"} value={orderTime} onChange={e => setOrderTime(e.target.value as OrderTimeOptionsTypes)} optionArray={orderTimeOptions} selectStyle={selectFieldStyle} optionsStyle={optionFieldStyle} />

            </div>
        </div>
    )
}
