import { styleData } from "@/data/menu/style";

export default function Style() {
  return (
    <div className="p-3">
      {styleData.map((item) => (
        <div key={item.id}>{item.label}</div>
      ))}
    </div>
  );
}
