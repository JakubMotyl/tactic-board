type SelectOption = {
  label: string;
  value: string | number;
};

type StyleConfig = {
  id: number;
  label: string;
  defaultValue: string | number;
  options: SelectOption[];
};

export const styleData: StyleConfig[] = [
  {
    id: 1,
    label: "Field",
    defaultValue: "striped-green",
    options: [
      { label: "Striped green", value: "striped-green" },
      { label: "Striped yellow", value: "striped-yellow" },
      { label: "Striped blue", value: "striped-blue" },
      { label: "Striped red", value: "striped-red" },
    ],
  },
  {
    id: 2,
    label: "Formation",
    defaultValue: "4-4-2",
    options: [
      { label: "4-4-2", value: "4-4-2" },
      { label: "4-3-3", value: "4-3-3" },
      { label: "3-5-2", value: "3-5-2" },
      { label: "4-5-1", value: "4-5-1" },
    ],
  },
  {
    id: 3,
    label: "Player Count",
    defaultValue: 11,
    options: [
      { label: "11", value: 11 },
      { label: "9", value: 9 },
      { label: "7", value: 7 },
      { label: "5", value: 5 },
      { label: "3", value: 3 },
    ],
  },
];
