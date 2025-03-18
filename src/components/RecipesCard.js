import CustomImage from "./customImg"
import { Link } from "react-router-dom";

export default function RecipesCard({ images, chefs, titles, descriptions }) {
    
    return (
      <div className="recipes-card">
        {images.map((src, index) => (
          <div key={index} className="recipe-card">
            <CustomImage imgSrc={src} pt={"65%"} />
            
            <div className="recipe-card-info">
              {chefs[index] && (
                <img className="chef-img" src={chefs[index].img} alt={chefs[index].name} />
              )}

            <h3>{titles[index]}</h3>
            
            <p>{descriptions[index]}</p>
            <Link to="/recipes" className="view-recipe">
              VIEW RECIPE
            </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
  