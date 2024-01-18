'use client'

import { signIn } from "next-auth/react"

export default function SignInButton({ callback }: { callback?: () => void }) {
    return (
        <button className="bg-emerald-500 hover:bg-emerald-400 ease-in-out duration-100 w-24 h-12 rounded-lg" onClick={async () => {
            await signIn('google');
            if (callback) {
                callback()
            }
        }}>Login</button>
    )
}
