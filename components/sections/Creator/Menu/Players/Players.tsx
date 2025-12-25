import type { ValuesProps } from "../../Creator";
import { generatePlayers } from "@/data/menu/players";
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
  const count = Number(values[3]);
  const players: Player[] = generatePlayers(count);

  // TODO
  // HANDLE CHANGE FUNCKJA NA ZMIANE DANYCH W PLAYERS
  // POPRAWA MULTIPLE FUNCKJI TYCH SAMYCH 0_0
  // SPRAWDZIC ROZWIAZANIE
  // STWORZYC USESTATE DLA PLAYERS Z DEFAULT WARTOSCIAMI W TYM COMP
  // ZMIANA WARTOSCI NA ONCHANGE
  // SETVALUES JEST USELLES

  // const handleChange = (id: number, newValue: string | number) => {
  //   setValues((prev) => ({
  //     ...prev,
  //     [id]: newValue,
  //   }));
  // };

  return (
    <div className="flex-1 flex flex-col gap-4 justify-between">
      <div className="w-full flex items-center justify-between">
        <p className="w-1/2">Player Number</p>
        <p className="w-1/2">Player Name</p>
      </div>
      <div className="flex-1 flex flex-col">
        {players.map((player) => {
          const numb = String(player.numb);
          return (
            <div
              key={player.id}
              className="w-full flex items-center justify-between"
            >
              <input
                type="number"
                value={numb}
                min="0"
                max="99"
                className="players-input"
                onChange={(e) => handleChange(player.id, e.target.value)}
              />
              <input
                type="text"
                value={player.name}
                onChange={(e) => handleChange(player.id, e.target.value)}
                className="players-input"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
