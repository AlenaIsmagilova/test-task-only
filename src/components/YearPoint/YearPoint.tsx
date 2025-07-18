import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BIG_BUTTON_SIZE, SMALL_BUTTON_SIZE } from "../../constants/contants";
import css from "./YearPoint.module.scss";

interface IYearPointProps {
  left: number;
  top: number;
  angle: number;
  index: number;
  active: boolean;
  onSelect: () => void;
  label: string;
}

const YearPoint = ({
  left,
  top,
  angle,
  index,
  active,
  onSelect,
  label,
}: IYearPointProps) => {
  const [hover, setHover] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const activeRef = useRef(active);
  // const labelRef = useRef<HTMLSpanElement>(null);
  const showNum = active || hover;

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const btnGrowHandler = () =>
    gsap.to(btnRef.current!, {
      width: BIG_BUTTON_SIZE,
      height: BIG_BUTTON_SIZE,
      duration: 0.3,
      backgroundColor: "rgba(244,245,249,1)",
      border: "1px solid #c0c7d1",
      ease: "power2.out",
    });

  const btnShrinkHandler = () =>
    !active &&
    gsap.to(btnRef.current!, {
      width: SMALL_BUTTON_SIZE,
      height: SMALL_BUTTON_SIZE,
      backgroundColor: "#42567A",
      borderWidth: 0,
      duration: 0.3,
      ease: "power2.out",
    });

  useEffect(() => {
    gsap.killTweensOf(btnRef.current);
    gsap.set(btnRef.current!, {
      width: active ? BIG_BUTTON_SIZE : SMALL_BUTTON_SIZE,
      height: active ? BIG_BUTTON_SIZE : SMALL_BUTTON_SIZE,
      backgroundColor: active ? "rgba(244,245,249,1)" : "#42567A",
      border: active ? "1px solid #c0c7d1" : "0px solid transparent",
    });
  }, [active]);

  // useEffect(() => {
  //   if (!labelRef.current) return;

  //   gsap.to(labelRef.current, {
  //     opacity: active ? 1 : 0,
  //     duration: 0.3,
  //     ease: "power2.out",
  //   });
  // }, [active]);

  const handleEnter = () => {
    setHover(true);
    if (activeRef.current) return;
    gsap.killTweensOf(btnRef.current);
    if (!active) btnGrowHandler();
  };

  const handleLeave = () => {
    setHover(false);
    if (activeRef.current) return;
    gsap.killTweensOf(btnRef.current);
    if (!active) btnShrinkHandler();
  };

  return (
    <div className={css.yearPointWrapper} style={{ left, top }}>
      <button
        ref={btnRef}
        className={active ? css.yearButtonActive : css.yearButton}
        // style={{ left, top }}
        onClick={onSelect}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <p className={css.yearButtonContent}>{showNum ? index + 1 : null}</p>
      </button>
      {/* {showNum && (
        <span className="sphere-label" ref={labelRef}>
          {label}
        </span>
      )} */}
    </div>
  );
};

export default YearPoint;
