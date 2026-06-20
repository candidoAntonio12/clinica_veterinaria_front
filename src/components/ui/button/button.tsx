import "./button.css"

export default function Button( 
        {text = "cadastrar", style = "button-primary", width = "auto", height = "auto" } )
{
    return (
        <>
            <button 
                style={{width: width , height: height}}
                className={ style }
            >
                {text}
            </button>
        </>
    )
}