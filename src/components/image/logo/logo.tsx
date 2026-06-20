
export default function Logo( {color = "auto", width = "auto", height = "auto"} )
{

    return (
        <>
            <img  
            style={ { backgroundColor: color, width: width, height: height } } 
            src="./src/assets/cananton_logo.png" 
            alt="logo-canaton"
            />
        </>
    )
}