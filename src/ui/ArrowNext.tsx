interface IArrowNextProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const ArrowNext = ({ onClick, disabled, className }: IArrowNextProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="none"
        className="arrow-icon"
      >
        <circle cx="25" cy="25" r="24.5" stroke="#42567A" strokeOpacity="0.5" />
        <path
          d="M22.5001 18.75L28.7501 25L22.5001 31.25"
          stroke="#42567A"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export default ArrowNext;
