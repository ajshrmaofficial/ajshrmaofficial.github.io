import useWindowManager from "../utility/hooks/useWindowManager";

function SpawningSpace(){
    const {components} = useWindowManager();

    return(
        <div className="absolute h-full w-full">
            {components}
        </div>
    )
}

export default SpawningSpace;
