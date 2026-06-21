
export default function Card(
        {
            title = "consultas" , description = "consulta",
            height = "auto", width="auto"

        }
    )
{
    return (
        <>
            <div>
                <div className="card-icon">
                    <img src="" alt="icon" />
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