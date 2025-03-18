export default function CustomImage({imgSrc, pt}) {
    return (
        <div className="custom-img" style={{paddingTop:pt}}>
            <img src={imgSrc} alt="" />
        </div>
    )
}