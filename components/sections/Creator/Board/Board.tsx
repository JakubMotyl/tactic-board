import { boardColors } from "@/data/board/board";
import { RefObject } from "react";
import type { Player } from "@/data/menu/players";

interface BoardProps {
  pitchStyle: string | number;
  players: Player[];
  imageRef: RefObject<HTMLDivElement | null>;
  lineupName: string;
}

export default function Board({
  pitchStyle,
  players,
  imageRef,
  lineupName,
}: BoardProps) {
  const currentStyle = pitchStyle as keyof typeof boardColors;
  return (
    <div className="md:w-1/2 w-full flex items-center  justify-center">
      <div
        ref={imageRef}
        className="h-[75dvh] relative aspect-68/105 overflow-hidden"
      >
        {/* Lineup Name */}
        <div className="absolute top-0 right-1 text-bg">
          <span className="text-xs text-bg font-semibold uppercase">
            {lineupName}
          </span>
        </div>

        {/* FOOTBALL PITCH SVG */}
        <svg viewBox="0 0 68 105" className="w-full h-full overflow-hidden">
          <defs>
            <pattern
              id="pitch-stripes-v"
              width="68"
              height="10.5"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="5.25"
                width="68"
                height="5.25"
                // TU WSTAW KLASĘ "DARK"
                style={{ fill: boardColors[currentStyle].primary }}
              />
            </pattern>
          </defs>

          {/* --- WARSTWA 1: BAZA (Jasny kolor) --- */}
          <rect
            width="68"
            height="105"
            // TU WSTAW KLASĘ "LIGHT"
            style={{ fill: boardColors[currentStyle].secondary }}
          />

          {/* --- WARSTWA 2: PASY (Nakładka) --- */}
          <rect width="68" height="105" fill="url(#pitch-stripes-v)" />

          {/* --- WARSTWA 3: LINIE (Białe) --- */}
          <g fill="none" stroke="white" strokeWidth="0.5" opacity="0.9">
            {/* Obrys zewnętrzny */}
            <rect x="0" y="0" width="68" height="105" />
            {/* Linia środkowa (Teraz pozioma) */}
            <line x1="0" y1="52.5" x2="68" y2="52.5" />
            {/* Koło środkowe */}
            <circle cx="34" cy="52.5" r="9.15" />
            <circle cx="34" cy="52.5" r="0.4" fill="white" stroke="none" />
            {/* --- GÓRA (Bramka przeciwnika) --- */}
            {/* Pole karne (szerokość 40.32, środek to 34 -> x od 13.84) */}
            <rect x="13.84" y="0" width="40.32" height="16.5" />
            {/* Pole bramkowe (szerokość 18.32 -> x od 24.84) */}
            <rect x="24.84" y="0" width="18.32" height="5.5" />
            {/* Punkt karny */}
            <circle cx="34" cy="11" r="0.4" fill="white" stroke="none" />
            {/* Łuk pola karnego */}
            <path d="M 26.68,16.5 A 9.15,9.15 0 0,0 41.32,16.5" />
            {/* --- DÓŁ (Nasza bramka) --- */}
            {/* Pole karne */}
            <rect x="13.84" y="88.5" width="40.32" height="16.5" />
            {/* Pole bramkowe */}
            <rect x="24.84" y="99.5" width="18.32" height="5.5" />
            {/* Punkt karny */}
            <circle cx="34" cy="94" r="0.4" fill="white" stroke="none" />
            {/* Łuk pola karnego */}
            <path d="M 26.68,88.5 A 9.15,9.15 0 0,1 41.32,88.5" />
            {/* --- NAROŻNIKI --- */}
            <path d="M 0,1 A 1,1 0 0,0 1,0" /> {/* Lewy G */}
            <path d="M 67,0 A 1,1 0 0,1 68,1" /> {/* Prawy G */}
            <path d="M 0,104 A 1,1 0 0,1 1,105" /> {/* Lewy D */}
            <path d="M 68,104 A 1,1 0 0,0 67,105" />
            {/* Prawy D */}
          </g>
        </svg>

        {/* PLAYERS */}
        <div className="absolute inset-0 z-10">
          {players.map((player) => (
            <div
              key={player.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center whitespace-nowrap"
              style={{
                left: `${player.position.x}%`,
                top: `${player.position.y}%`,
              }}
            >
              <div className="flex items-center justify-center bg-white text-bg w-11 h-11 rounded-full shadow-[0_0_5px_rgba(0,0,0,0.45)] hover:scale-105 active:scale-105 duration-200 cursor-grab">
                <span className="text-xl font-semibold">{player.numb}</span>
              </div>
              <p className="text-sm text-bg font-semibold">{player.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
