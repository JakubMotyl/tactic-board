import Style from "./Style/Style";

export default function Menu() {
  return (
    <div className="w-full md:w-1/2 h-full border border-white rounded-2xl overflow-hidden divide-y divide-white">
      <div className="w-full bg-transparent flex items-center justify-between divide-x divide-white">
        <p className="creator-cat-picker">Style</p>
        <p className="creator-cat-picker">Players</p>
        <p className="creator-cat-picker">My Lineups</p>
      </div>
      <Style />
    </div>
  );
}
