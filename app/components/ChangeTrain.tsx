"use client";
import { useState } from "react";
import { ITrain } from "../interfaces/train-interface";
import classes from "./ChangeTrain.module.css";
import { changeTrain } from "../services/train-service";
import { useRouter } from "next/navigation";
export default function ChangeTrain({ train }: { train: ITrain }) {
  const [departure, setDeparture] = useState(train.departure);
  const [arrive, setArrive] = useState(train.arrive);
  const [departureDate, setDepartureDate] = useState(train.departureDate);
  const [arriveDate, setArriveDate] = useState(train.arriveDate);
  const router = useRouter();
  async function handleSaveTrain(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const body = {
      id: train.id,
      departure,
      arrive,
      departureDate,
      arriveDate,
    };
    const res = await changeTrain(train.id, body);

    router.push("/schedule");
    router.refresh();
  }
  function handleCancel(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push("/schedule");
  }
  return (
    <div className={classes.formWrapper}>
      <form className={classes.form}>
        <h1 className={classes.form__title}>Change Train</h1>

        <div className={classes.form__inputWrapper}>
          <label htmlFor="departure">Departure City</label>
          <input
            type="text"
            placeholder="Enter departure city"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>

        <div className={classes.form__inputWrapper}>
          <label htmlFor="arrival">Arrival City</label>
          <input
            type="text"
            placeholder="Enter arrival city"
            value={arrive}
            onChange={(e) => setArrive(e.target.value)}
          />
        </div>

        <div className={classes.form__dateWrapper}>
          <label htmlFor="departureDate">Departure Date</label>
          <input
            type="date"
            placeholder="Enter departure date"
            value={new Date(departureDate).toISOString().slice(0, 10)}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        <div className={classes.form__dateWrapper}>
          <label htmlFor="departureDate">Arrival Date</label>
          <input
            type="date"
            placeholder="Enter departure date"
            value={new Date(arriveDate).toISOString().slice(0, 10)}
            onChange={(e) => setArriveDate(e.target.value)}
          />
        </div>

        <div className={classes.form__buttonWrapper}>
          <button className={classes.form_buttonCancel} onClick={handleCancel}>
            Cancel
          </button>
          <button
            className={classes.form_button}
            onClick={(e) => handleSaveTrain(e)}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
