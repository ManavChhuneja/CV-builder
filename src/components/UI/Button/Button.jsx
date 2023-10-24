import styles from "./Button.module.css";

const Button = (props) => {
  // setting the inline style for the background color depending on the type of the button
  const style = {
    backgroundColor: props.type === "reset" ? "#FF3131" : "#004aad",
  };

  const clickHandler = () => {
    props.onButtonClick();
  };

  return (
    <button
      className={styles["ui-button"]}
      style={style}
      type={props.type === "submit" ? "submit" : "button"}
      onClick={clickHandler}
    >
      {props.text}
    </button>
  );
};

export default Button;
