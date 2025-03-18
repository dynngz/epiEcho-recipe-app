
import PreviousSearches from "../components/Previous-section";
import RecipesCard from "../components/RecipesCard";

export default function Recipes({images, searchIcon, chefs}) {
    //console.log("received links:", searchIcon);
    const titles = ["Oppenheimer (2023)", "Lost in Translation (2003)", "Interstellar (2014)", "Marie Antoinette (2006)","The Dark Knight (2008)","The Bling Ring (2013)"];
    const descriptions = [
    "A biographical drama about J. Robert Oppenheimer, the physicist who led the development of the atomic bomb.",
    "A lonely actor and a young woman form an unexpected bond in Tokyo.",
    "A space epic exploring time, love, and survival.",
    "A visually stunning take on the life of France’s infamous queen.",
    "A legendary Batman film featuring Heath Ledger’s Joker.",
    "A group of teens obsessed with fame rob celebrities' homes."];
    return (
    <div>
        <PreviousSearches searchIcon={searchIcon}/>
        <div className="recipes-container">
            <RecipesCard images={images} chefs={chefs} titles={titles} descriptions={descriptions} />
        </div>
    </div>
    )
}