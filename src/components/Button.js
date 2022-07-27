const Button = ({color,changeColor}) => {
    console.log(color);
    return <button className="btn" onClick={changeColor}>background color is <span style={{color:color}}>{color}</span></button>
}

export default Button;