import clsx from "clsx";

interface ButtonProps {
  buttonText: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ buttonText, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `px-5 py-2 border-2 border-[#ff6600] text-[#ff6600] rounded-lg font-semibold hover:bg-[#ff6600] hover:text-white transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff6600] focus:ring-offset-2 `,
        className,
      )}
    >
      {buttonText}
    </button>
  );
};

export default Button;
