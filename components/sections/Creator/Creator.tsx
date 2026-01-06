"use client";
import Menu from "./Menu/Menu";
import Board from "./Board/Board";
import { useRef, useState } from "react";
import { getInitialPlayers } from "@/data/menu/players";
import type { Player } from "@/data/menu/players";
import { toPng } from "html-to-image";

export type ValuesProps = Record<string, string | number>;

export default function Creator() {
  const [players, setPlayers] = useState<Player[]>(getInitialPlayers("4-4-2"));
  const imageRef = useRef<HTMLDivElement>(null);
  const [lineupName, setLineupName] = useState("my-lineup");

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

  const handleDownload = async () => {
    if (!imageRef.current) return;

    try {
      const dataUrl = await toPng(imageRef.current, {
        quality: 1.0,
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      if (!lineupName) {
        alert("Please enter a lineup name before downloading.");
        return;
      }
      link.download = `${lineupName}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      id="creator"
      className="min-h-dvh w-full gap-8 flex flex-col xl:max-w-7xl max-w-4xl px-4 py-10 mx-auto"
    >
      <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
        <div className="w-full flex items-center justify-between">
          <input
            type="text"
            value={lineupName}
            onChange={(e) => {
              if (e.target.value.length > 18) return;
              setLineupName(e.target.value);
            }}
            placeholder="Name lineup..."
            className="outline-none text-cream placeholder:text-cream/60 border border-cream px-4 py-2 rounded-4xl"
          />
          <button className="creator-btn">Save</button>
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="creator-btn" onClick={() => handleDownload()}>
            Download Image
          </button>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col items-center justify-between gap-4">
        <Menu
          players={players}
          setPlayers={setPlayers}
          values={values}
          setValues={setValues}
          handleChange={handleChange}
        />
        <Board
          pitchStyle={values["pitchStyle"]}
          players={players}
          imageRef={imageRef}
          lineupName={lineupName}
        />
      </div>
    </section>
  );
}
