import ChangeTrain from "@/app/components/ChangeTrain";
import { searchTrain } from "@/app/services/train-service";
async function getTrainInfo(id: number) {
  const res = await searchTrain(id);
  return res;
}
export default async function ChangeTrainPage({ params }: any) {
  const train = await getTrainInfo(+params.id);
  return (
    <>
      <ChangeTrain train={train} />
    </>
  );
}
