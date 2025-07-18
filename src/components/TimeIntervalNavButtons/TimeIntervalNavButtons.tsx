import ArrowNext from "../../ui/ArrowNext";
import ArrowPrev from "../../ui/ArrowPrev";
import TimeIntervalDots from "../TimeIntervalDots/TimeIntervalDots";
import css from "./TimeIntervalNavButtons.module.scss";

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
  <div className={css.timeIntervalNavWrapper}>
    <p className={css.timeIntervalCounter}>{`0${idx + 1}/0${total}`}</p>
    <div className={css.paginationRow}>
      <ArrowPrev
        className={`${css.timeIntervalButton} ${css.timeIntervalButtonPrev}`}
        disabled={!canPrev}
        onClick={onPrev}
      />
      <ArrowNext
        className={`${css.timeIntervalButton} ${css.timeIntervalButtonNext}`}
        disabled={!canNext}
        onClick={onNext}
      />
      <TimeIntervalDots
        items={dots.items}
        activeIdx={dots.activeIdx}
        onSelect={dots.onSelect}
      />
    </div>
  </div>
);

export default TimeIntervalNavButtons;
