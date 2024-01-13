import type { ReactNode } from "react";

export default function AccountPageBlock({ block_header, children }: { block_header: string, children: ReactNode }) {

    const blockStyling = "flex flex-col justify-center items-center text-left border border-slate-400 bg-slate-100 mb-8 w-full h-full rounded-lg gap-2 p-4"

    return (
        <div className={blockStyling}>
            <h3 className="font-bold">{block_header}</h3>
            <div className="font-medium">{children}</div>
        </div>
    )
}