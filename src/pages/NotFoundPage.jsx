import { images } from "../constants"
import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <div style={{textAlign: "center", padding: "1%", background: "#000", minHeight: "100vh"}}>
            <img style={{width: "40%", height: "20%", borderRadius: "15px", border: "white 5px solid"}} src={images.NotFounded404Cat} alt="" /><br /><br />
            <Link to="/" style={{background: "white", padding: "10px", borderRadius: "10px", color: "black", fontWeight: "bolder", border: "2px solid gray"}}>Tela Inicial</Link>
        </div>
    )
}