
export default function Thor({width= "auto", height= "auto", color= "white"})
{
    return (
        <>
            <img 
            style={{width: width, height: height, backgroundColor: color}} 
            src="/src/assets/cananton_thor.png" 
            alt="thor image" 
            />
        </>
    )
}