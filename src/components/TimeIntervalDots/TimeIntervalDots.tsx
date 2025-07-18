import css from "./TimeIntervalDots.module.scss";

interface ITimeIntervalDotsProps {
  items: { name: string }[];
  activeIdx: number;
  onSelect: (idx: number) => void;
}

const DOT = 6;
const GAP = 10;

const TimeIntervalDots = ({
  items,
  activeIdx,
  onSelect,
}: ITimeIntervalDotsProps) => (
  <div className={css.dotsWrapper}>
    {items.map((_, i) => (
      <button
        key={i}
        className={`${css.dot} ${i === activeIdx ? css.active : ""}`}
        style={{
          width: DOT,
          height: DOT,
          marginInlineEnd: i === items.length - 1 ? 0 : GAP,
        }}
        onClick={() => onSelect(i)}
      />
    ))}
  </div>
);

export default TimeIntervalDots;
