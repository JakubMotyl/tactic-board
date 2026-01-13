import { it, describe, expect } from "vitest";
import { getInitialPlayers } from "./players";

describe("getInitialPlayers", () => {
  describe("Valid formations", () => {
    it("return 11 players for 4-4-2 formation", () => {
      expect(getInitialPlayers("4-4-2")).toHaveLength(11);
    });

    it("return 11 players for 4-3-3 formation", () => {
      expect(getInitialPlayers("4-3-3")).toHaveLength(11);
    });
  });

  describe("Data integrity", () => {
    it("generate correct player structure (id, numb, name, position)", () => {
      const players = getInitialPlayers("4-4-2");
      const firstPlayer = players[0];
      const originalData = {
        id: 0,
        numb: 1,
        name: "Player 1",
        position: {
          x: 50,
          y: 92,
        },
      };
      expect(firstPlayer).toMatchObject(originalData);

      expect(typeof firstPlayer.position.x).toBe("number");
      expect(typeof firstPlayer.position.y).toBe("number");
    });
  });

  describe("Default", () => {
    it("use 4-4-2 formation when no argument is provided", () => {
      const formation = getInitialPlayers();
      expect(formation).toHaveLength(11);
      expect(formation[9].position).toEqual({ x: 38, y: 20 });
    });
  });
});
