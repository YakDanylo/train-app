"use client";
import { ITrain } from "../interfaces/train-interface";
import { deleteTrain } from "../services/train-service";
import classes from "./TrainDetails.module.css";
import { useRouter } from "next/navigation";
export default function TrainDetails({ train }: { train: ITrain }) {
  const router = useRouter();
  async function handleDeleteTrain() {
    const response = await deleteTrain(train.id);
    router.push("/schedule");
    router.refresh();
  }
  function handleChangeTrain() {
    router.push(`/schedule/change/${train.id}`);
  }
  return (
    <div>
      <div className={classes.train}>
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
      <div className={classes.buttonsWrapper}>
        <button
          className={classes.buttonsWrapper__cancel}
          onClick={() => router.back()}
        >
          Cancel
        </button>
        <button
          className={classes.buttonsWrapper__delete}
          onClick={handleDeleteTrain}
        >
          Delete
        </button>
        <button
          className={classes.buttonsWrapper__edit}
          onClick={handleChangeTrain}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
