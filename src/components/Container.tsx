export function Container({children, name, wrap}: { children?: React.ReactNode; name: string, wrap: boolean }){
    return(
        <div id={name} className={`flex flex-col min-h-svh items-center gap-10 justify-center lg:justify-between lg:flex-row ${wrap ? 'flex-wrap' : ''}`}>
            {children}
        </div>
    )
}
