"use client";
import { useState } from "react";
import classes from "./TrainAddForm.module.css";
import { useRouter } from "next/navigation";
import { addTrain } from "../services/train-service";

export default function TrainAddForm() {
  const [departure, setDeparture] = useState("");
  const [arrive, setArrive] = useState("");
  const [departureDate, setDepartureDate] = useState(new Date());
  const [arriveDate, setArriveDate] = useState(new Date());
  const router = useRouter();
  async function handleSubmit(e: any) {
    e.preventDefault();
    addTrain({ departure, arrive, departureDate, arriveDate });
    setDeparture("");
    setArrive("");
    setDepartureDate(new Date());
    setArriveDate(new Date());
    router.push("/schedule");
    router.refresh();
  }
  function handleCancel(e: any) {
    e.preventDefault();
    setDeparture("");
    setArrive("");
    setDepartureDate(new Date());
    setArriveDate(new Date());
    router.push("/schedule");
  }
  return (
    <div className={classes.formWrapper}>
      <form className={classes.form}>
        <h1 className={classes.form__title}>Add Train</h1>

        <div className={classes.form__inputWrapper}>
          <label htmlFor="departure">Departure City</label>
          <input
            type="text"
            placeholder="Enter departure city"
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>

        <div className={classes.form__inputWrapper}>
          <label htmlFor="arrival">Arrival City</label>
          <input
            type="text"
            placeholder="Enter arrival city"
            onChange={(e) => setArrive(e.target.value)}
          />
        </div>

        <div className={classes.form__dateWrapper}>
          <label htmlFor="departureDate">Departure Date</label>
          <input
            type="date"
            placeholder="Enter departure date"
            value={departureDate.toISOString().split("T")[0]}
            onChange={(e) => setDepartureDate(new Date(e.target.value))}
          />
        </div>

        <div className={classes.form__dateWrapper}>
          <label htmlFor="departureDate">Arrival Date</label>
          <input
            type="date"
            placeholder="Enter departure date"
            value={arriveDate.toISOString().split("T")[0]}
            onChange={(e) => setArriveDate(new Date(e.target.value))}
          />
        </div>

        <div className={classes.form__buttonWrapper}>
          <button className={classes.form_buttonCancel} onClick={handleCancel}>
            Cancel
          </button>
          <button className={classes.form_button} onClick={handleSubmit}>
            Add Train
          </button>
        </div>
      </form>
    </div>
  );
}
