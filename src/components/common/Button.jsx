import classNames from "classnames";

export const Button = ({
  children,
  onClick,
  testId,
  className,
  type = "submit",
}) => {
  return (
    <button
      type={type}
      data-testid={testId}
      onClick={onClick}
      className={classNames(
        "bg-green-400 p-2 rounded-lg hover:bg-green-600 text-white",
        className
      )}
    >
      {children}
    </button>
  );
};
