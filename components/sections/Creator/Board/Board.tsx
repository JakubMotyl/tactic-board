import { generatePlayers } from "@/data/menu/players";
import { boardColors } from "@/data/board/board";
import { ValuesProps } from "../Creator";

interface BoardProps {
  values: ValuesProps;
}

export default function Board({ values }: BoardProps) {
  const currentStyle = values[1] as keyof typeof boardColors;
  console.log(currentStyle);
  return (
    <div className="h-[75dvh] relative aspect-68/105 flex items-center  justify-center md:w-1/2 w-full rounded-2xl overflow-hidden">
      {/* FOOTBALL PITCH SVG */}
      <svg viewBox="0 0 68 105" className="w-full h-full">
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
      <div className="inset-0 absolute z-10">
        {/* ARRAY FROM DLA PLAYERS.LENGTH */}
      </div>
    </div>
  );
}
