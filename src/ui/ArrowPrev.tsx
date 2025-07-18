interface IArrowPrevProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const ArrowPrev = ({ onClick, disabled, className }: IArrowPrevProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="none"
        className="arrow-icon"
      >
        <circle
          cx="25"
          cy="25"
          r="24.5"
          transform="matrix(-1 0 0 1 50 0)"
          stroke="#42567A"
          strokeOpacity="0.5"
        />
        <path
          d="M27.4999 18.75L21.2499 25L27.4999 31.25"
          stroke="#42567A"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export default ArrowPrev;
