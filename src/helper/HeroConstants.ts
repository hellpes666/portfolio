type RING_VALUES = number[];
interface ILayerElementValue {
  orbitSize: number;
  rotationDegree: number;
  elementSize: number;
}

const LAYERS_HERO_RING: RING_VALUES = [620, 820, 1020, 1220];

const BIG_STARS_LAYER_VALUES: ILayerElementValue[] = [
  {
    orbitSize: 800,
    rotationDegree: -72,
    elementSize: 28,
  },
  {
    orbitSize: 550,
    rotationDegree: 20,
    elementSize: 12,
  },
  {
    orbitSize: 590,
    rotationDegree: 98,
    elementSize: 8,
  },
];

const SPARKLES_LAYER_VALUES: ILayerElementValue[] = [
  {
    orbitSize: 430,
    rotationDegree: -14,
    elementSize: 8,
  },
  {
    orbitSize: 440,
    rotationDegree: 79,
    elementSize: 5,
  },
  {
    orbitSize: 530,
    rotationDegree: 178,
    elementSize: 10,
  },
  {
    orbitSize: 710,
    rotationDegree: 85,
    elementSize: 3,
  },
];

const CIRCLES_LAYER_VALUES = [
  {
    orbitSize: 720,
    rotationDegree: 85,
    elementSize: 3,
  },
  {
    orbitSize: 520,
    rotationDegree: -41,
    elementSize: 2,
  },
  {
    orbitSize: 650,
    rotationDegree: -5,
    elementSize: 2,
  },
];
export {
  LAYERS_HERO_RING,
  BIG_STARS_LAYER_VALUES,
  SPARKLES_LAYER_VALUES,
  CIRCLES_LAYER_VALUES,
};
