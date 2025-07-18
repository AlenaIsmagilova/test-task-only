import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
  <div className="swiper-section" ref={swiperRef}>
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
          <div className="event-card">
            <h3>{ev.year}</h3>
            <p>{ev.event}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default TimeIntervalSlider;
