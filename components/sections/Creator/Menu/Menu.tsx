"use client";
import { useState } from "react";
import Style from "./Style/Style";
import Players from "./Players/Players";
import MyLineups from "./MyLineups/MyLineups";
import type { ValuesProps } from "../Creator";

interface MenuProps {
  values: ValuesProps;
  handleChange: (id: number, newValue: string | number) => void;
}

export default function Menu({ values, handleChange }: MenuProps) {
  const [category, setCategory] = useState<string>("style");
  return (
    <div className="h-[75dvh] w-full md:w-1/2 border border-white rounded-2xl overflow-hidden divide-y divide-white flex flex-col">
      <div className="w-full bg-transparent flex items-center justify-between divide-x divide-white">
        <button
          className={`creator-cat-picker ${
            category === "style" && "bg-cream text-bg"
          }`}
          onClick={() => setCategory("style")}
        >
          Style
        </button>
        <button
          className={`creator-cat-picker ${
            category === "players" && "bg-cream text-bg"
          }`}
          onClick={() => setCategory("players")}
        >
          Players
        </button>
        <button
          className={`creator-cat-picker ${
            category === "my lineups" && "bg-cream text-bg"
          }`}
          onClick={() => setCategory("my lineups")}
        >
          My Lineups
        </button>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        {category === "style" && (
          <Style values={values} handleChange={handleChange} />
        )}
        {category === "players" && (
          <Players values={values} handleChange={handleChange} />
        )}
        {category === "my lineups" && <MyLineups />}
      </div>
    </div>
  );
}
