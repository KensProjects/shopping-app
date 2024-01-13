import type { ReactNode } from "react";

export default function Container({ column_flow, children, extra_styling }: { column_flow?: boolean, children: ReactNode, extra_styling?: string }) {
    return (
        <div className={`flex p-2 w-full h-full ${column_flow && "flex-col"} ${extra_styling && extra_styling}`}>
            {children}
        </div>
    )
}
