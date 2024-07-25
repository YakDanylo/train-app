"use client";
import SearchTrainForm from "@/app/components/SearchTrainForm";
import TrainsList from "@/app/components/TrainsList";
import { ITrain } from "@/app/interfaces/train-interface";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";

export default function ClientPage() {
  const [trains, setTrains] = useState([] as ITrain[]);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  return (
    <div>
      <SearchTrainForm
        setTrains={setTrains}
        setError={setError}
        setLoader={setLoader}
      />
      {trains.length !== 0 && <TrainsList trains={trains} />}
      {loader && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <ColorRing
            visible={true}
            height="100"
            width="100"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
      {error && (
        <p
          style={{
            textAlign: "center",
            fontWeight: "Bold",
            fontSize: "24px",
            marginTop: "20px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
