interface ButtonProps {
  buttonText: string;
  style?: string;
  onClick?: () => void;
}

const Button = ({ buttonText, style = "", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-50 h-10 border rounded-3xl border-transparent text-white bg-[#ff6600] flex justify-center items-center cursor-pointer font-bold text-[16px] uppercase  hover:scale-105 transition-transform duration-300 shadow-lg ${style}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
