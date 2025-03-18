export default function PreviousSearches({searchIcon}) {
    const searches = ["Soup","Pizza", "Hamburger", "Cheese", "Pasta", "Cookies"];
    return (
        <div className="previous-searches section">
                <h2>Previous searches</h2>
                <div className="prevs-container">
                    {searches.map((search, index) => (<div key={index} style={{animationDelay: index *.1 + "s"}} className="search-item">
                        {search}
                        </div>)) }
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search for a recipe"/>
                    <button className="bt">
                    {searchIcon.map((icon) => <img className="s-icon" key={icon.name} src={icon.icon} alt={icon.name} />)}
                    </button>
                </div>

            </div>
    )
}