"use client";
import { styleData } from "@/data/menu/style";
import { TiArrowSortedDown } from "react-icons/ti";
import type { ValuesProps } from "../../Creator";

interface StyleProps {
  values: ValuesProps;
  handleChange: (id: number, newValue: string | number) => void;
}

export default function Style({ values, handleChange }: StyleProps) {
  return (
    <div className="flex-1 flex flex-col justify-between">
      {styleData.map((item) => (
        <div key={item.id} className="flex flex-col gap-1">
          <span>{item.label}</span>
          <div className="relative">
            <select
              value={values[item.id]}
              className="border w-full border-cream p-3 pr-10 rounded focus:outline-none focus:border-white appearance-none cursor-pointer"
              onChange={(e) => handleChange(item.id, e.target.value)}
            >
              {item.options.map((opt) => (
                <option key={opt.label} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <TiArrowSortedDown className="text-4xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
