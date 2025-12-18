import type { ValuesProps } from "../../Creator";
interface PlayersProps {
  values: ValuesProps;
  handleChange: (id: number, newValue: string | number) => void;
}

export default function Players({ values, handleChange }: PlayersProps) {
  return <div className="flex-1 flex flex-col justify-between">Players</div>;
}
