import css from "./TimeIntervalHeader.module.scss";

const TimeIntervalHeader = () => (
  <div>
    <h1 className={css.title}>
      <span className={css.lineStart}>Исторические</span>
      <span className={`${css.lineStart} ${css.second}`}>даты</span>
    </h1>
  </div>
);

export default TimeIntervalHeader;
