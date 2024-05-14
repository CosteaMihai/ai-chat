export default function Loading() {
    return (
        <div className="animate-pulse flex">
            <div className="flex-1 space-y-3 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                </div>
            </div>
        </div>
    )
}