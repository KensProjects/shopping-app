'use client'

import {atom} from "jotai"

export type OrderTimeOptionsTypes = '8am-9am' | '9am-10am' | '10am-11am' | '11am-12pm'

export type OrderTypeOptionsTypes = "Delivery" | "Pickup"

export type OrderDaysOptionsTypes = "Monday" | "Tuesday" | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

export const orderTypeOptions = ["Delivery", "Pickup"] as OrderTypeOptionsTypes[]

export const orderTimeOptions = ['8am-9am', '9am-10am', '10am-11am', '11am-12pm'] as OrderTimeOptionsTypes[]

export const orderDaysOptions = ["Monday", "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as OrderDaysOptionsTypes[]

export const orderTypeAtom = atom<OrderTypeOptionsTypes>("Pickup")
export const orderTimeAtom = atom<OrderTimeOptionsTypes>("8am-9am")
export const orderDayAtom = atom<OrderDaysOptionsTypes>("Monday")
