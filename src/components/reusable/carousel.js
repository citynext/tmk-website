import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import { Children, useCallback, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

const EmblaCarousel = ({children, className, options, autoplay, ...props}) => {
  let args = [];
  if (autoplay) {
    args.push(Autoplay({delay: 8000, stopOnUserInteraction: true}));
  }
  const [emblaRef, emblaApi] = useEmblaCarousel(options, args);
  
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const mappedChildren = Children.map(children, child =>
    <li className="pl-4 min-w-0 relative" style={{flex: "0 0 auto"}}>{child}</li>
  );
  return (
    <div className={className} {...props}>
      <div
        className={``}
        ref={emblaRef}
        >
        <ul className="flex touch-pan-y">
          { mappedChildren }
        </ul>
      </div>
      {/* <div className="flex justify-center mt-10">
        <button className="rounded-full bg-white shadow-xl p-4 flex justify-center items-center text-3xl m-4" onClick={onPrevButtonClick} disabled={prevBtnDisabled}><FaChevronLeft /></button>
        <button className="rounded-full bg-white shadow-xl p-4 flex justify-center items-center text-3xl m-4" onClick={onNextButtonClick} disabled={nextBtnDisabled}><FaChevronRight /></button>
      </div> */}
    </div>
  );
};

export default EmblaCarousel;
