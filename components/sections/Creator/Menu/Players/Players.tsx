import { Dispatch, SetStateAction } from "react";
import type { Player } from "@/data/menu/players";
interface PlayersProps {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
}

export default function Players({ players, setPlayers }: PlayersProps) {
  const handleChangePlayerData = (
    id: number,
    cat: "name" | "numb",
    newValue: string
  ) => {
    setPlayers((players) =>
      players.map((player) =>
        player.id === id
          ? { ...player, [cat]: cat === "numb" ? Number(newValue) : newValue }
          : player
      )
    );
  };

  return (
    <div className="flex-1 flex gap-4 justify-between">
      <div className="w-full">
        <p>Player Number</p>
        <div>
          {players.map((player) => (
            <div key={player.id}>
              <input
                type="number"
                min={1}
                max={99}
                maxLength={2}
                value={player.numb}
                onChange={(e) =>
                  handleChangePlayerData(player.id, "numb", e.target.value)
                }
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <p>Player Name</p>
        <div>
          {players.map((player) => (
            <div key={player.id}>
              <input
                type="text"
                value={player.name}
                onChange={(e) =>
                  handleChangePlayerData(player.id, "name", e.target.value)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
