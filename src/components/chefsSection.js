import ChefsCard from "./chefsCard"
export default function ChefsSection({chefs, SocialMediaicons}) {
    return (
        <div className="section chefs">
            <div className="title">
                <h1>Our top Chefs</h1>
            </div>
            
            <div className="chefs-container">
                {chefs.map(chef =>(<ChefsCard key={chef.name} chefs={chef} icons={SocialMediaicons}/>) )}
            </div>
        </div>
    )
}