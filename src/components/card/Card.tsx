import  "./Card.css" 
import no_image from "/src/assets/no_image.jpeg"

export default function Card(
        {
            title = "consultas" , description = "consulta",
            height = "100%", width="auto", src = no_image,
            header = "header"

        }
    )
{
    return (
        <>
            <div style={{height: height, width:width}} className="card">
                <div className="header">
                    <h5>{header}</h5>
                    <div className="card-icon">
                        <img src={src} alt="icon" />
                    </div>
                </div>
                <div className="card-title">
                    {title}
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
        </>
    )
}