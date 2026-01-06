import { Dispatch, SetStateAction } from "react";
import type { Player } from "@/data/menu/players";
interface PlayersProps {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
}

export default function Players({ players, setPlayers }: PlayersProps) {
  // Change player data function
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
      <div className="w-full flex flex-col gap-2">
        <p className="">Player Number</p>
        <div className="h-full flex flex-col justify-between">
          {players.map((player) => (
            <div key={player.id}>
              <input
                type="text"
                value={player.numb === 0 ? "" : player.numb}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "") {
                    handleChangePlayerData(player.id, "numb", value);
                    return;
                  }
                  if (!/^\d+$/.test(value)) return;
                  if (value.length > 2) return;
                  if (Number(value) > 99) return;

                  handleChangePlayerData(player.id, "numb", value);
                }}
                className="players-input"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p>Player Name</p>
        <div className="h-full flex flex-col justify-between">
          {players.map((player) => (
            <div key={player.id}>
              <input
                type="text"
                value={player.name}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "") {
                    handleChangePlayerData(player.id, "name", value);
                    return;
                  }
                  if (!/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ.\s]+$/.test(value)) return;
                  if (value.length > 12) return;

                  handleChangePlayerData(player.id, "name", value);
                }}
                className="players-input"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
