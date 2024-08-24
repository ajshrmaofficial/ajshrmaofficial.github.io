export function Container({children, name}: { children?: React.ReactNode; name: string }){
    return(
        <div id={name} className="flex flex-col min-h-svh items-center gap-10 justify-center lg:justify-between lg:flex-row">
            {children}
        </div>
    )
}
