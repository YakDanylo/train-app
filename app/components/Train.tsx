"use client";
import { ITrain } from "../interfaces/train-interface";
import classes from "./Train.module.css";
import { useRouter } from "next/navigation";
interface TrainProps {
  train: ITrain;
}
export default function Train({ train }: TrainProps) {
  const router = useRouter();
  return (
    <div
      className={classes.train}
      onClick={() => router.push(`/schedule/${train.id}`)}
    >
      <div className={classes.placeData}>
        <div className={classes.placeData__departure}>
          <h3>Departure city:</h3>
          <p>{train.departure}</p>
        </div>
        <div className={classes.placeData__arrive}>
          <h3>Arrive city:</h3>
          <p>{train.arrive}</p>
        </div>
      </div>
      <div className={classes.dateData}>
        <div className={classes.dateData__departureDate}>
          <h3>Departure Date:</h3>
          <p>{new Date(train.departureDate).toDateString()}</p>
        </div>
        <div className={classes.dateData__arriveDate}>
          <h3>Arrive Date:</h3>
          <p>{new Date(train.arriveDate).toDateString()}</p>
        </div>
      </div>
    </div>
  );
}
