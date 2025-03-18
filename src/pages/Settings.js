import { useState, useEffect } from "react"

export default function Settings() {
    const [settings, setSettings] = useState(() => {
        const savedSettings = localStorage.getItem('appSettings')
        return savedSettings 
            ? JSON.parse(savedSettings) 
            : {
                "--background-color": "#fff",
                "--background-light": "#fff",
                "--shadow-color": "rgba(0,0,0,0.2)",
                "--primary-color": "rgb(155, 190, 168)",
                "--text-color": "rgb(72, 48, 24)",
                "--text-light": "#575757",
                "--font-size": "16px",
                "--animation-speed": 1
            }
    }) 
    // initialize
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme || "light"
    })

    const [primaryColor, setPrimaryColor] = useState(() => {
        const savedColor = localStorage.getItem('primaryColor')
        return savedColor ? parseInt(savedColor) : 0
    })

    const [fontSize, setFontSize] = useState(() => {
        const savedSize = localStorage.getItem('fontSize')
        return savedSize ? parseInt(savedSize) : 1
    })

    const [animationSpeed, setAnimationSpeed] = useState(() => {
        const savedSpeed = localStorage.getItem('animationSpeed')
        return savedSpeed ? parseInt(savedSpeed) : 1
    })

    // apply CSS variables whenever settings change
    useEffect(() => {
        const root = document.documentElement
        for(let key in settings) {
            root.style.setProperty(key, settings[key])
        }
        
        localStorage.setItem('appSettings', JSON.stringify(settings))
    }, [settings])

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        localStorage.setItem('primaryColor', primaryColor.toString())
    }, [primaryColor])

    useEffect(() => {
        localStorage.setItem('fontSize', fontSize.toString())
    }, [fontSize])

    useEffect(() => {
        localStorage.setItem('animationSpeed', animationSpeed.toString())
    }, [animationSpeed])



    const themes = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "rgb(72, 48, 24)",
            "--text-light": "#575757",
        }, {
            "--background-color": "rgb(29,29,29)",
            "--background-light": "rgb(77,77,77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "rgb(155, 190, 168)",
        }
    ]
    
    function changeTheme(i) {
        const _theme = {...themes[i]}
        setTheme(i === 0 ? "light" : "dark")
        //update
        let _settings = {...settings}
        for(let key in _theme) {
            _settings[key] = _theme[key]
        }
        setSettings(_settings)
    }
    
    function changeColors(i) {
        const _color = primaryColors[i]
        let _settings = {...settings}
        _settings["--primary-color"] = _color
        setPrimaryColor(i)
        setSettings(_settings)
    }

    function changeFontSize(i) {
        const _size = fontSizes[i]
        let _settings = {...settings}
        _settings["--font-size"] = _size.value
        setFontSize(i)
        setSettings(_settings)
    }
    
    function changeAnimationSpeed(i) {
        const _speed = animationSpeeds[i]
        let _settings = {...settings}
        _settings["--animation-speed"] = _speed.value
        setAnimationSpeed(i)
        setSettings(_settings)
    }

    const primaryColors = [
        "#9cbbaa", "#a4bf5d", "#98d2c0", "#8a5f39", "#b1b3ac"
    ]
    
    const fontSizes = [
        {title: "Small", value: "12px"},
        {title: "Medium", value: "16px"},
        {title: "Large", value: "20px"},
    ]
    
    const animationSpeeds = [
        {title: "Slow", value: "2.5"},
        {title: "Medium", value: "1"},
        {title: "Fast", value: ".5"},
    ]
    
    return (
        <div>
            <div className="section d-block">
                <h2>Primary theme</h2>
                <div className="options-container">
                    <div className="option light" onClick={() =>changeTheme(0)}>
                        {theme === "light" && (
                            <div className="check">
                            <i className="fa-solid fa-check"></i>
                            </div>
                        )}
                    </div>
                    <div className="option dark" onClick={() =>changeTheme(1)}>
                        {theme === "dark" && (
                            <div className="check">
                            <i className="fa-solid fa-check"></i>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="section d-block">
                <h2>Preferred color</h2>
                <div className="options-container">
                    {primaryColors.map((color, index) => (
                        <div key={index} className="option light" style={{backgroundColor: color}} onClick={()=>changeColors(index)}>
                            { primaryColor === index && (
                                <div className="check">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                            ) }

                        </div>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Font size</h2>
                <div className="options-container">
                    {fontSizes.map((size, index) => (
                        <button key={index} className="bt" onClick={() => changeFontSize(index)}>
                            {size.title}
                            { fontSize === index && <span><i className="fa-solid fa-check"></i></span>}
                        </button>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Animation speed</h2>
                <div className="options-container">
                    {animationSpeeds.map((speed, index) => (
                        <button key={index} className="bt" onClick={()=>changeAnimationSpeed(index)}>
                            {speed.title}
                            { animationSpeed === index && <span><i className="fa-solid fa-check"></i></span>}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}