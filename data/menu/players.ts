export type Player = {
  id: number;
  numb: number;
  name: string;
};

export const generatePlayers = (count: number): Player[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    numb: i + 1,
    name: "Click to edit",
  }));
