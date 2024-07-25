"use client";
import { useState } from "react";
import classes from "./SearchTrainForm.module.css";
import { useRouter } from "next/navigation";
import { searchTrains } from "../services/train-service";
export default function SearchTrainForm({
  setTrains,
  setError,
  setLoader,
}: {
  setTrains: (data: any) => void;
  setError: (data: any) => void;
  setLoader: (data: any) => void;
}) {
  const [departure, setDeparture] = useState("");
  const [arrive, setArrive] = useState("");
  const [departureDateStart, setDepartureDateStart] = useState(
    new Date().toISOString()
  );
  const [departureDateEnd, setDepartureDateEnd] = useState(
    new Date().toISOString()
  );
  const router = useRouter();
  async function handleSubmit(e: any) {
    setLoader(true);
    setTrains([]);
    setError("");
    e.preventDefault();
    const response = await searchTrains({
      departure,
      arrive,
      departureDateStart,
      departureDateEnd,
    });
    if (
      response?.statusCode === 404 ||
      response?.statusCode === 500 ||
      response?.statusCode === 400
    ) {
      setTrains([]);
      setError(response.message);
      setLoader(false);
      return;
    }
    setError("");
    setTrains(response);
    setLoader(false);
  }
  function handleCancel(e: any) {
    e.preventDefault();
    router.back();
  }
  return (
    <form className={classes.form}>
      <h1>Search Trains</h1>
      <div className={classes.form__inputWrapper}>
        <div className={classes.form__inputWrapper__block}>
          <label htmlFor="from">Departure place</label>
          <input
            type="text"
            id="from"
            placeholder="Depart"
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>

        <div className={classes.form__inputWrapper__block}>
          <label htmlFor="to">Arrive place</label>
          <input
            type="text"
            id="to"
            placeholder="Arrive"
            onChange={(e) => setArrive(e.target.value)}
          />
        </div>
      </div>
      <div className={classes.form__dateWrapper}>
        <div className={classes.form__dateWrapper__block}>
          <label htmlFor="departureDate">From Date</label>
          <input
            type="date"
            id="departureDate"
            placeholder="Depart Date"
            value={departureDateStart.slice(0, 10)}
            onChange={(e) =>
              setDepartureDateStart(new Date(e.target.value).toISOString())
            }
          />
        </div>

        <div className={classes.form__dateWrapper__block}>
          <label htmlFor="departureDateFrom">To Date</label>
          <input
            type="date"
            id="departureDateFrom"
            placeholder="Departure Date From"
            value={departureDateEnd.slice(0, 10)}
            onChange={(e) =>
              setDepartureDateEnd(new Date(e.target.value).toISOString())
            }
          />
        </div>
      </div>
      <div className={classes.form__buttonWrapper}>
        <button className={classes.form_buttonCancel} onClick={handleCancel}>
          Cancel
        </button>
        <button className={classes.form_button} onClick={handleSubmit}>
          Search
        </button>
      </div>
    </form>
  );
}
