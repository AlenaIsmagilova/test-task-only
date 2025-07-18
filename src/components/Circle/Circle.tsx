import YearPoint from "../YearPoint/YearPoint";
import { CIRCLE_RADIUS, SLICE_ANGLE } from "../../constants/contants";

interface ICircleProps {
  activeIdx: number;
  onSelect: (idx: number) => void;
  items: { name: string }[];
}

const Circle = ({ activeIdx, onSelect, items }: ICircleProps) => (
  <div className="circle">
    {items.map((it, i) => {
      const angle = SLICE_ANGLE * i;
      const rad = ((angle - 90) * Math.PI) / 180;
      const x = 265 + CIRCLE_RADIUS * Math.cos(rad);
      const y = 265 + CIRCLE_RADIUS * Math.sin(rad);

      return (
        <YearPoint
          key={it.name + i}
          left={x}
          top={y}
          angle={angle}
          index={i}
          active={i === activeIdx}
          onSelect={() => onSelect(i)}
          label={it.name}
        />
      );
    })}
  </div>
);

export default Circle;
