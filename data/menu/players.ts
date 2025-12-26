export type Player = {
  id: number;
  numb: number;
  name: string;
  position: {
    x: number;
    y: number;
  };
};

const FORMATIONS: Record<string, { x: number; y: number }[]> = {
  "4-4-2": [
    { x: 50, y: 90 },
    { x: 15, y: 75 },
    { x: 38, y: 80 },
    { x: 62, y: 80 },
    { x: 85, y: 75 },
    { x: 15, y: 50 },
    { x: 38, y: 55 },
    { x: 62, y: 55 },
    { x: 85, y: 50 },
    { x: 38, y: 20 },
    { x: 62, y: 20 },
  ],
  "4-3-3": [
    { x: 50, y: 90 },
    { x: 15, y: 75 },
    { x: 38, y: 80 },
    { x: 62, y: 80 },
    { x: 85, y: 75 },
    { x: 50, y: 65 },
    { x: 30, y: 50 },
    { x: 70, y: 50 },
    { x: 15, y: 25 },
    { x: 50, y: 15 },
    { x: 85, y: 25 },
  ],
  "3-5-2": [
    { x: 50, y: 90 },
    { x: 25, y: 80 },
    { x: 50, y: 82 },
    { x: 75, y: 80 },
    { x: 10, y: 55 },
    { x: 35, y: 65 },
    { x: 50, y: 60 },
    { x: 65, y: 65 },
    { x: 90, y: 55 },
    { x: 35, y: 20 },
    { x: 65, y: 20 },
  ],
  "4-5-1": [
    { x: 50, y: 90 },
    { x: 15, y: 75 },
    { x: 38, y: 80 },
    { x: 62, y: 80 },
    { x: 85, y: 75 },
    { x: 15, y: 45 },
    { x: 35, y: 60 },
    { x: 50, y: 65 },
    { x: 65, y: 60 },
    { x: 85, y: 45 },
    { x: 50, y: 15 },
  ],
};

export const getInitialPlayers = (
  formationName: string = "4-4-2"
): Player[] => {
  const coords = FORMATIONS[formationName];

  return coords.map((pos, id) => ({
    id: id,
    numb: id + 1,
    name: "Click to edit",
    position: pos,
  }));
};
