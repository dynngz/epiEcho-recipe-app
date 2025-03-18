export default function ChefsCard({chefs, icons}) {
    return (
        <div className="chef-card">
            <div className="chef-card-img">
                <img src={chefs.img} alt="" />
            </div>
            <div className="chef-card-info">
                <h3 className="chef-card-name">{chefs.name}</h3>
                <p className="chef-card-count">Recipes: <b>{chefs.recipesCount}</b> </p>
                <p className="chef-card-cousine">Cousine: <b>{chefs.cousine}</b> </p>
                <p className="sm-icons">
                    {icons && icons.map((icon) => (
                        <img key={icon.name} src={icon.icon} alt={icon.name} />
                    ))}
                </p>
            </div>
        </div>
    )
}