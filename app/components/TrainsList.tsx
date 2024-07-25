"use client";
import { useState } from "react";
import { ITrain } from "../interfaces/train-interface";
import Train from "./Train";
import { sortFunctions } from "../functions/sortFunctions";

export default function TrainsList({ trains }: { trains: ITrain[] }) {
  const [sortedTrains, setSortedTrains] = useState(trains || []);

  function handleChangeSort(e: React.ChangeEvent<HTMLSelectElement>) {
    const sortKey = e.target.value;
    const sorted = [...trains].sort(sortFunctions[sortKey]);
    setSortedTrains(sorted);
  }

  return (
    <>
      <div>
        <label>Sort by:</label>
        <select onChange={handleChangeSort}>
          <option value="departureName">Departure Name</option>
          <option value="arriveName">Arrive Name</option>
          <option value="departureDateNearest">Departure Date - nearest</option>
          <option value="departureDateLatest">Departure Date - latest</option>
          <option value="arriveDate">Arrive Date</option>
        </select>
      </div>
      {sortedTrains.map((train) => (
        <Train key={train.id} train={train} />
      ))}
    </>
  );
}
