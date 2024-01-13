import type { ReactNode } from "react";

export default function AccountPageSection({ section_header, children }: { section_header: string, children: ReactNode }) {
    return (
        <div className="flex flex-col justify-between items-center border border-black rounded-t-xl overflow-hidden text-black w-10/12 gap-4">
            <h2 className="flex justify-center items-center font-bold text-xl h-12 w-full bg-blue-300">
                {section_header}
            </h2>
            <div className="w-10/12 h-full p-2">{children}</div>
        </div>
    )
}
