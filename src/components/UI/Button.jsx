const Button = ({ children, textOnly, className }) => {
  // console.log(textOnly)

  let cssClasses = textOnly ? "text-button" : "button";

  cssClasses += " " + className;

  return <button className={className}>{children}</button>;
};

export default Button;
