
import { useState } from "react";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";


const steps = [
    {
        title: "Confiez-nous votre logement",
        description: "Complétez le formulaire et estimez combien vous pouvez gagner en nous confiant votre logement.",
        image: "images/general-landing/how1.svg"
    },
    {
        title: "Explorez sereinement et encaissez votre loyer",
        description: "Inscrivez-vous gratuitement en quelques clics et obtenez votre carte de membre.",
        image: "images/general-landing/how2.svg"
    },
    {
        title: "Finito-vous",
        description: "Inscrivez-vous gratuitement en quelques clics et obtenez votre carte de membre.",
        image: "images/general-landing/how3.svg"
    },
]


const StepCard = ({ step, title, description, className }) => {
    return (
        <div className={`flex items-center p-5 bg-white border border-gray-400 rounded-xl h-32 w-[28rem] ${className}`}>
            <label className="flex justify-center items-center text-lg bg-secondary text-white rounded-[50%] min-h-10 min-w-10">
                {step}
            </label>
            <div className="ml-5">
                <h2 className="text-xl mb-2">{title}</h2>
                <p className="text-gray-500 text-xs">{description}</p>
            </div>
        </div>
    )
}


export default function How() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep === steps.length - 1) {
            // setCurrentStep(0);
            return;
        }
        setCurrentStep(currentStep + 1);
    }

    const prevStep = () => {
        if (currentStep === 0) {
            // setCurrentStep(steps.length - 1);
            return;
        }
        setCurrentStep(currentStep - 1);
    }

    const getNextStep = () => {
        if (currentStep === steps.length - 1) {
            return 0;
        }
        return currentStep + 1;
    }

    const getPrevStep = () => {
        if (currentStep === 0) {
            return steps.length - 1;
        }
        return currentStep - 1;
    }
    
    const className = {
        arrow: "text-3xl bg-text text-white rounded-full p-3 m-4",
        inactiveArrow: "opacity-30 cursor-default",
        image: "m-5 rounded-2xl object-cover min-w-96"
    }
    return (
        <section className="flex justify-center items-center lg:py-32">
            <div className="flex flex-col justify-center items-center">
                <h1 className="max-w-[95vw] lg:max-w-[60rem] my-5 text-2xl lg:text-4xl text-center">Ils ne sont pas les seuls à être malins, profitez également de vos voyages sans double peine !</h1>
                <div className="">
                    <div className="relative">
                        <ul className="flex justify-center my-5">
                            <li><img src={steps[getPrevStep()].image} alt={steps[getPrevStep()].title} className={`${className.image} opacity-50 scale-90`} /></li>
                            <li><img src={steps[currentStep].image} alt={steps[currentStep].title} className={className.image} /></li>
                            <li><img src={steps[getNextStep()].image} alt={steps[getNextStep()].title} className={`${className.image} opacity-50 scale-90`} /></li>
                        </ul>
                        <ul className="flex absolute right-0 left-32 mx-auto md:left-auto scale-75 md:scale-75 lg:scale-100 md:right-20 bottom-20 lg:right-[-5rem] w-[40rem] overflow-hidden">
                            {steps.map((step, index) => {
                                if (index === currentStep) {
                                    return (
                                        <li key={index}><StepCard step={index + 1} title={step.title} description={step.description} /></li>
                                    )
                                }
                                else if (index >= currentStep) {
                                    return (
                                        <li key={index}><StepCard className="scale-90 opacity-50" step={index + 1} title={step.title} description={step.description} /></li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center m-4">
                        <button className={`${className.arrow} ${currentStep === 0 ? className.inactiveArrow : ''}`} onClick={prevStep}><HiOutlineArrowSmallLeft /></button>
                        <button className={`${className.arrow} ${currentStep === steps.length - 1 ? className.inactiveArrow : ''}`}  onClick={nextStep}><HiOutlineArrowSmallRight /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}