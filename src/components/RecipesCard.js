import CustomImage from "./customImg"

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
            <a href="#!" className="view-recipe">
              VIEW RECIPE
            </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
  