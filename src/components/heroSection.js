import CustomImage from "./customImg"
export default function heroSection({images}) {
    return (
        <div className="section hero">
            <div className="col typography">
                <div className="title">
                    <h1>Who We Are: 
                        <span style={{ display: "block", marginTop: "10px" }}>A Symphony of Flavors</span>
                    </h1>
                    <p className="info">Welcome to Epicurean Echo, where passion 
                        for food meets culinary creativity. We’re not just a recipe 
                        platform—we’re a movement for food lovers, home chefs, and 
                        adventurers seeking to elevate their cooking. 
                        <br /><br />
                        Whether you're
                        looking for quick weekday meals, gourmet experiments, or 
                        cultural delicacies, our echo resonates with flavors from around the world.</p>
                    <button className="bt">Explore now</button>
                </div>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} /> 
                ))}
            </div>
        </div>
    )
}