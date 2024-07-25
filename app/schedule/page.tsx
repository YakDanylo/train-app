import { cookies } from "next/headers";
import AddButton from "../components/AddButton";
import SearchButton from "../components/SearchButton";
import TrainsList from "../components/TrainsList";

async function getSchedule() {
  const res = await fetch(`${process.env.FETCH_API_URL}/train`, {
    method: "GET",
    headers: {
      Authorization: `${cookies().get("access_token")?.value}`,
    },
  });
  const data = await res.json();
  if (data?.statusCode === 401) {
    return [];
  }
  return data;
}
export default async function Schedule() {
  const trains = await getSchedule();
  return (
    <div>
      {trains.length === 0 ? (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          There is no trains in schedule, but you can add them
        </p>
      ) : (
        <TrainsList trains={trains} />
      )}
      <AddButton />
      <SearchButton />
    </div>
  );
}
