import '../styles/App.css'

function Content({children}: React.PropsWithChildren){
    return(
        <div className="flex flex-col min-h-svh items-center gap-10 justify-center lg:justify-between lg:flex-row">
            {children}
        </div>
    )
}

export default Content;
