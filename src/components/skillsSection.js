import { useEffect } from "react";

export default function SkillsSection() {
    const list = [
        "Diverse & Curated Recipes",
        "Interactive & Engaging",
        "Chef-Driven Inspiration",
        "Smart Cooking Tools",
        "Community-Centric",
    ];

    useEffect(() => {
        const handleScroll = () => {
            const skillItems = document.querySelectorAll(".skill-item");

            skillItems.forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    item.classList.add("visible");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run on load in case it's already in view

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="section skills">
            <div className="col img">
                <img
                    src="https://i.pinimg.com/originals/65/6a/51/656a515908926db2772ae1420f388cc9.png"
                    alt=""
                />
            </div>
            <div className="col typography">
                <div className="title">
                    <h1>Why Choose Epicurean Echo?</h1>
                    {list.map((item, index) => (
                        <p className="skill-item" key={index}>
                            {item}
                        </p>
                    ))}
                    <button className="bt">Sign up now</button>
                </div>
            </div>
        </div>
    );
}
