import "./input.css";

function Input({ clickHandler, className, value, type }) {
  return (
    <>
      <input
        onClick={clickHandler}
        className={className}
        type={type || "button"}
        value={value}
      />
    </>
  );
}

export default Input;
