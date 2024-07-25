import TrainDetails from "@/app/components/TrainDetails";
import { searchTrain } from "@/app/services/train-service";

async function getTrainInfo(id: number) {
  const res = await searchTrain(id);
  return res;
}
export default async function TrainPage({ params }: any) {
  const train = await getTrainInfo(+params.id);

  return (
    <>
      <TrainDetails train={train} />
    </>
  );
}
