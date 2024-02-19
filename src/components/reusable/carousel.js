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
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const mappedChildren = Children.map(children, child =>
    <li className="embla__slide">{child}</li>
  );
  return (
    <div className={className}>
      <div
        className={`overflowx-hidden`}
        ref={emblaRef}
        >
        <ul className="flex touch-pan-y -m-4">
          { mappedChildren }
        </ul>
      </div>
      <div className="flex justify-center mt-10">
        <button className="rounded-full bg-white shadow-xl p-4 flex justify-center items-center text-3xl m-4" onClick={onPrevButtonClick} disabled={prevBtnDisabled}><FaChevronLeft /></button>
        <button className="rounded-full bg-white shadow-xl p-4 flex justify-center items-center text-3xl m-4" onClick={onNextButtonClick} disabled={nextBtnDisabled}><FaChevronRight /></button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
