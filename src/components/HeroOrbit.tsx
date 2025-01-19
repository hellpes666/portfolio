import { PropsWithChildren } from 'react';

const HeroOrbit = ({
  children,
  size,
  rotationDegree,
}: PropsWithChildren<{ size: number; rotationDegree: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      {/* animate-spin [animation-duration:30s] animate-spin [animation-duration:7s]*/}
      <div
        className="flex items-start justify-start"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotationDegree}deg)`,
        }}
      >
        <div
          className="inline-flex"
          style={{ transform: `rotate(${rotationDegree * -1}deg)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
