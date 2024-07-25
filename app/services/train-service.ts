"use server";
import { cookies } from "next/headers";
import { ITrain } from "../interfaces/train-interface";
import { json } from "stream/consumers";
interface trainBody {
  departure: string;
  arrive: string;
  departureDate: Date | string;
  arriveDate: Date | string;
}

interface trainBodyQuery {
  departure: string;
  arrive: string;
  departureDateStart: Date | string;
  departureDateEnd: Date | string;
}
export async function addTrain(body: trainBody) {
  "use server";
  try {
    const res = await fetch(`${process.env.FETCH_API_URL}/train`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${cookies().get("access_token")?.value}`,
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}

export async function searchTrains(body: trainBodyQuery) {
  "use server";
  try {
    const res = await fetch(
      `${process.env.FETCH_API_URL}/train?departure=${body.departure}&arrive=${body.arrive}&departureDateStart=${body.departureDateStart}&departureDateEnd=${body.departureDateEnd}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${cookies().get("access_token")?.value}`,
        },
      }
    );
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}

export async function searchTrain(id: number) {
  "use server";
  try {
    const res = await fetch(`${process.env.FETCH_API_URL}/train/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${cookies().get("access_token")?.value}`,
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}

export async function deleteTrain(id: number) {
  "use server";
  try {
    const res = await fetch(`${process.env.FETCH_API_URL}/train/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${cookies().get("access_token")?.value}`,
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}
export async function changeTrain(id: number, body: ITrain) {
  "use server";
  try {
    const res = await fetch(`${process.env.FETCH_API_URL}/train/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${cookies().get("access_token")?.value}`,
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}
