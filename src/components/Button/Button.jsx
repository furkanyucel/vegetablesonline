import "./Button.css";

const Button = (props) => {
  return (
    <div className="buttons">
      {props.children}
    </div>
  )
}

export default Button