import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import Image from 'next/image';
import HeroOrbit from '@/components/HeroOrbit';
import {
  BIG_STARS_LAYER_VALUES,
  CIRCLES_LAYER_VALUES,
  SPARKLES_LAYER_VALUES,
} from '@/helper/HeroConstants';
import { LAYERS_HERO_RING } from '@/helper/HeroConstants';

export const HeroSection = () => {
  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        {LAYERS_HERO_RING.map((size, index) => (
          <div
            key={index}
            className={`size-[${size}px] hero-ring`}
          ></div>
        ))}
        {BIG_STARS_LAYER_VALUES.map((value, index) => (
          <HeroOrbit
            key={index}
            size={value.orbitSize}
            rotationDegree={value.rotationDegree}
          >
            <StarIcon
              className={`size-${value.elementSize} text-emerald-300`}
            />
          </HeroOrbit>
        ))}

        {SPARKLES_LAYER_VALUES.map((value, index) => (
          <HeroOrbit
            key={index}
            size={value.orbitSize}
            rotationDegree={value.rotationDegree}
          >
            <SparkleIcon
              className={`size-${value.elementSize} text-emerald-300/20`}
            />
          </HeroOrbit>
        ))}

        {CIRCLES_LAYER_VALUES.map((value, index) => (
          <HeroOrbit
            key={index}
            size={value.orbitSize}
            rotationDegree={value.rotationDegree}
          >
            <div
              className={`size-${value.elementSize} bg-emerald-300/20 rounded-full`}
            />
          </HeroOrbit>
        ))}
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behing laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project!
          </p>
        </div>
        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};
