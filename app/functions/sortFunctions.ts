import { ITrain } from "../interfaces/train-interface";

export const sortFunctions: {
  [key: string]: (a: ITrain, b: ITrain) => number;
} = {
  departureName: (a, b) => a.departure.localeCompare(b.departure),
  arriveName: (a, b) => a.arrive.localeCompare(b.arrive),
  departureDateNearest: (a, b) =>
    new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime(),
  departureDateLatest: (a, b) =>
    new Date(b.departureDate).getTime() - new Date(a.departureDate).getTime(),
  arriveDate: (a, b) =>
    new Date(a.arriveDate).getTime() - new Date(b.arriveDate).getTime(),
};
