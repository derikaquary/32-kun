import NavService from "../_components/NavService"

function ServiceLayout({children}) {
    return (
        <>
        {/* BIG Screen */}
        <div className="hidden flex-row sm:flex">
            <NavService/>
            <div className="ml-[280px] flex-1">{children}</div>
        </div>
        {/* Small Screen */}
        <div className="flex flex-col bg-red-400 sm:hidden">
            <NavService/>
            <div className="sm:ml-[280px] flex-1">{children}</div>
        </div>
        
        </>
    )
}

export default ServiceLayout
