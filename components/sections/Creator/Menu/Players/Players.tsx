import type { ValuesProps } from "../../Creator";
import type { Player } from "@/data/menu/players";
import { Dispatch, SetStateAction } from "react";
interface PlayersProps {
  values: ValuesProps;
  setValues: Dispatch<SetStateAction<ValuesProps>>;
  handleChange: (id: number, newValue: string | number) => void;
}

export default function Players({
  values,
  setValues,
  handleChange,
}: PlayersProps) {
  return (
    <div className="flex-1 flex flex-col gap-4 justify-between">
      <div className="w-full flex items-center justify-between">
        <p className="w-1/2">Player Number</p>
        <p className="w-1/2">Player Name</p>
      </div>
      <div className="flex-1 flex flex-col"></div>
    </div>
  );
}
