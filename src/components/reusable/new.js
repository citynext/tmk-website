
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Carousel({children, className, options, autoplay, ...props}) {
    let args = [];
    if (autoplay) {
      args.push(Autoplay());
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(options, args);
    return (
        <div className={`${className}`} {...props}>
            <div className="overflow-hidden" ref={emblaRef}>
                <ul className="flex">
                    {children}
                </ul>
            </div>
        </div>
    );
}