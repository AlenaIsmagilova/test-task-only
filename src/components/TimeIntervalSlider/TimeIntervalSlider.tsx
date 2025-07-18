import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import css from "./TimeIntervalSlider.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";

interface ITimeIntervalSliderProps {
  events: { year: number; event: string }[];
  titleKey: string;
  swiperRef: React.Ref<HTMLDivElement>;
}

const TimeIntervalSlider = ({
  events,
  titleKey,
  swiperRef,
}: ITimeIntervalSliderProps) => (
  <div className={css.swiperSection} ref={swiperRef}>
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination
      grabCursor
      slidesPerView="auto"
      loop={false}
      key={titleKey}
    >
      {events.map((ev, i) => (
        <SwiperSlide key={i}>
          <div className={css.eventCard}>
            <h3 className={css.eventYear}>{ev.year}</h3>
            <p className={css.eventName}>{ev.event}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default TimeIntervalSlider;
