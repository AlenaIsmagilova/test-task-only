import { useMemo, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import {
  ACTIVE_POS_ANGLE,
  SLICE_ANGLE,
  TIME_INTERVAL,
} from "./constants/contants";
import Circle from "./components/Circle/Circle";
import TimeIntervalHeader from "./components/TimeIntervalHeader/TimeIntervalHeader";
import TimeIntervalSlider from "./components/TimeIntervalSlider/TimeIntervalSlider";
import TimeIntervalNavButtons from "./components/TimeIntervalNavButtons/TimeIntervalNavButtons";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/main.scss";

const App = () => {
  const [timeIntervalIndex, setTimeIntervalIndex] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);
  const minYearRef = useRef<HTMLParagraphElement>(null);
  const maxYearRef = useRef<HTMLParagraphElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);

  const timeInterval = TIME_INTERVAL[timeIntervalIndex];

  useEffect(() => {
    const el = swiperRef.current;
    if (!el) return;

    gsap.set(el, { autoAlpha: 0, y: 30 });

    gsap.to(el, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [timeIntervalIndex]);

  useEffect(() => {
    const startRot = ACTIVE_POS_ANGLE - SLICE_ANGLE * timeIntervalIndex;
    if (circleRef.current) {
      gsap.set(circleRef.current, { rotation: startRot });
      circleRef.current.style.setProperty("--rotation", `${startRot}deg`);
    }
  }, []);

  const years = useMemo(
    () => timeInterval.eventsByYear.map((e) => e.year).sort((a, b) => a - b),
    [timeInterval]
  );

  const sortedEvents = useMemo(
    () => [...timeInterval.eventsByYear].sort((a, b) => a.year - b.year),
    [timeInterval]
  );

  const prevMin = useRef(years[0]);
  const prevMax = useRef(years[years.length - 1]);

  useEffect(() => {
    const newMin = years[0];
    const newMax = years[years.length - 1];

    const count = (from: number, to: number, node: HTMLElement) => {
      gsap.to(
        { n: from },
        {
          n: to,
          duration: Math.abs(from - to) * 0.02,
          roundProps: "n",
          ease: "none",
          onUpdate() {
            node.textContent = String(this.targets()[0].n);
          },
        }
      );
    };

    if (minYearRef.current && maxYearRef.current) {
      if (prevMin.current !== newMin)
        count(prevMin.current, newMin, minYearRef.current);
      if (prevMax.current !== newMax)
        count(prevMax.current, newMax, maxYearRef.current);
      prevMin.current = newMin;
      prevMax.current = newMax;
    }
  }, [timeIntervalIndex, years]);

  const changeTimeInterval = (newIdx: number) => {
    const desiredRot = ACTIVE_POS_ANGLE - SLICE_ANGLE * newIdx;

    gsap.to(circleRef.current, {
      rotation: desiredRot,
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => {
        const rot = gsap.getProperty(circleRef.current!, "rotation") as number;
        circleRef.current!.style.setProperty("--rotation", `${rot}deg`);
      },
    });

    gsap.to(swiperRef.current, {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        setTimeIntervalIndex(newIdx);
      },
    });
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="main-container">
          <TimeIntervalHeader />
          <div className="fixed-elements">
            <div className="guide-vertical-center" />
            <div className="guide-horizontal-center" />
            <div className="circle-wrapper" ref={circleRef}>
              <Circle
                activeIdx={timeIntervalIndex}
                onSelect={changeTimeInterval}
                items={TIME_INTERVAL}
              />
            </div>
            <div className="years-center">
              <p ref={minYearRef} className="year-left">
                {years[0]}
              </p>
              <p ref={maxYearRef} className="year-right">
                {years[years.length - 1]}
              </p>
            </div>
          </div>

          <div className="slider-container">
            <TimeIntervalNavButtons
              idx={timeIntervalIndex}
              total={TIME_INTERVAL.length}
              canPrev={timeIntervalIndex > 0}
              canNext={timeIntervalIndex < TIME_INTERVAL.length - 1}
              onPrev={() => changeTimeInterval(timeIntervalIndex - 1)}
              onNext={() => changeTimeInterval(timeIntervalIndex + 1)}
              dots={{
                items: TIME_INTERVAL,
                activeIdx: timeIntervalIndex,
                onSelect: changeTimeInterval,
              }}
            />

            <TimeIntervalSlider
              events={sortedEvents}
              titleKey={timeInterval.name}
              swiperRef={swiperRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
