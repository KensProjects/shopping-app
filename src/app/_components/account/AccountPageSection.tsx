import type { ReactNode } from "react";

export default function AccountPageSection({ section_header, children }: { section_header: string, children: ReactNode }) {
    return (
        <div className="flex flex-col justify-between items-center border border-black rounded-t-xl overflow-auto text-black w-10/12 gap-4 text-center">
            <h2 className="flex justify-center items-center font-bold text-lg h-16 w-full bg-blue-300 text-center p-4">
                {section_header}
            </h2>
            <div className="w-10/12 h-full p-2 flex flex-col items-center justify-between">{children}</div>
        </div>
    )
}
