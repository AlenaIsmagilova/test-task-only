interface ITimeIntervalHeaderProps {
  minYear: number;
  maxYear: number;
  minYearRef: React.Ref<HTMLParagraphElement>;
  maxYearRef: React.Ref<HTMLParagraphElement>;
}

const TimeIntervalHeader = ({
  minYear,
  maxYear,
  minYearRef,
  maxYearRef,
}: ITimeIntervalHeaderProps) => (
  <div>
    <h1 className="title">
      <span className="line-start">Исторические</span>
      <span className="line-start second">даты</span>
    </h1>

    {/* <div className="years-center">
      <p ref={minYearRef} className="year-left">
        {minYear}
      </p>
      <p ref={maxYearRef} className="year-right">
        {maxYear}
      </p>
    </div> */}
  </div>
);

export default TimeIntervalHeader;
