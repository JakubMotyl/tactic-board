"use client";
import Menu from "./Menu/Menu";
import Board from "./Board/Board";
import { useState } from "react";
import { getInitialPlayers } from "@/data/menu/players";
import type { Player } from "@/data/menu/players";

export type ValuesProps = Record<string, string | number>;

export default function Creator() {
  const [players, setPlayers] = useState<Player[]>(getInitialPlayers("4-4-2"));

  const [values, setValues] = useState<ValuesProps>({
    pitchStyle: "striped-green",
    formation: "4-4-2",
    playersCount: 11,
  });

  const handleChange = (id: string, newValue: string | number) => {
    setValues((prev) => ({
      ...prev,
      [id]: newValue,
    }));

    if (id === "formation") {
      setPlayers(getInitialPlayers(String(newValue)));
    }
  };

  return (
    <section
      id="creator"
      className="min-h-dvh w-full gap-8 flex flex-col xl:max-w-7xl max-w-4xl px-4 py-10 mx-auto"
    >
      <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
        <div className="md:w-1/2 w-full flex md:justify-start justify-center">
          <input
            type="text"
            placeholder="Name lineup..."
            className="outline-none text-cream placeholder:text-cream/60 border border-cream px-4 py-2 rounded-4xl"
          />
        </div>
        <div className="flex items-center justify-between md:w-1/2 w-full">
          <button className="creator-btn">Download Image</button>
          <button className="creator-btn">Save</button>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col items-center justify-between gap-4">
        <Menu
          values={values}
          setValues={setValues}
          handleChange={handleChange}
        />
        <Board pitchStyle={values["pitchStyle"]} players={players} />
      </div>
    </section>
  );
}
