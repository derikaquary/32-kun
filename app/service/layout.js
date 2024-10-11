import Page1Service from "../_components/Page1Service"

function ServiceLayout({children}) {
    return (
        <>
        <div className="hidden flex-row sm:flex">
            <Page1Service/>
            <div className="ml-[280px] flex-1">{children}</div>
        </div>
        <div className="flex flex-col sm:hidden">
            <Page1Service/>
            <div className="sm:ml-[280px] flex-1">{children}</div>
        </div>
        
        </>
    )
}

export default ServiceLayout
