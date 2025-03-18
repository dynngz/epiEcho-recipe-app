import HeroSection from "../components/heroSection"
import SkillsSection from "../components/skillsSection" 
import QuoteSection from "../components/quoteSection"
import ChefsSection from "../components/chefsSection"
export default function Home({images, chefs, SocialMediaicons }) {
    return (
        <div>
            <HeroSection images={images}/>
            <SkillsSection />
            <QuoteSection />
            <ChefsSection chefs={chefs} SocialMediaicons={SocialMediaicons}/>
        </div>
    )
}