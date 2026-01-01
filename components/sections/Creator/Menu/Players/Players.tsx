import { Dispatch, SetStateAction } from "react";
import type { Player } from "@/data/menu/players";
interface PlayersProps {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
  handleChange: (id: string, newValue: string | number) => void;
}

export default function Players({
  players,
  setPlayers,
  handleChange,
}: PlayersProps) {
  return (
    <div className="flex-1 flex gap-4 justify-between">
      <div className="w-full">
        <p>Player Number</p>
        <div>
          {players.map((player) => (
            <div key={player.id}>{player.numb}</div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <p>Player Name</p>
        <div>
          {players.map((player) => (
            <div key={player.id}>{player.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
