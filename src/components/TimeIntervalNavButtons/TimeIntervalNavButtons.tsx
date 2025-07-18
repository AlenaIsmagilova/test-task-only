import ArrowNext from "../../ui/ArrowNext";
import ArrowPrev from "../../ui/ArrowPrev";
import TimeIntervalDots from "../TimeIntervalDots/TimeIntervalDots";

interface ITimeIntervalNavButtonsProps {
  idx: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  dots: {
    items: { name: string }[];
    activeIdx: number;
    onSelect: (i: number) => void;
  };
}

const TimeIntervalNavButtons = ({
  idx,
  total,
  onPrev,
  onNext,
  canPrev,
  canNext,
  dots,
}: ITimeIntervalNavButtonsProps) => (
  <div className="time-interval-nav-wrapper">
    <p className="time-interval-counter">{`0${idx + 1}/0${total}`}</p>
    <div className="pagination-row">
      <ArrowPrev
        className="time-interval-button time-interval-button-prev"
        disabled={!canPrev}
        onClick={onPrev}
      />
      <ArrowNext
        className="time-interval-button time-interval-button-next"
        disabled={!canNext}
        onClick={onNext}
      />
      {/* <div className="mobile-only"> */}
      <TimeIntervalDots
        items={dots.items}
        activeIdx={dots.activeIdx}
        onSelect={dots.onSelect}
      />
      {/* </div> */}
    </div>
  </div>
);

export default TimeIntervalNavButtons;
