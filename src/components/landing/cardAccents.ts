export const cardAccentMap = {
  indigo:  { border: "border-indigo-500",  wash: "from-indigo-500/20",  iconBg: "bg-indigo-500/20",  iconText: "text-indigo-300" },
  cyan:    { border: "border-cyan-500",    wash: "from-cyan-500/20",    iconBg: "bg-cyan-500/20",    iconText: "text-cyan-300" },
  fuchsia: { border: "border-fuchsia-500", wash: "from-fuchsia-500/20", iconBg: "bg-fuchsia-500/20", iconText: "text-fuchsia-300" },
  emerald: { border: "border-emerald-500", wash: "from-emerald-500/20", iconBg: "bg-emerald-500/20", iconText: "text-emerald-300" },
  orange:  { border: "border-orange-500",  wash: "from-orange-500/20",  iconBg: "bg-orange-500/20",  iconText: "text-orange-300" },
  blue:    { border: "border-blue-500",    wash: "from-blue-500/20",    iconBg: "bg-blue-500/20",    iconText: "text-blue-300" },
  rose:    { border: "border-rose-500",    wash: "from-rose-500/20",    iconBg: "bg-rose-500/20",    iconText: "text-rose-300" },
  violet:  { border: "border-violet-500",  wash: "from-violet-500/20",  iconBg: "bg-violet-500/20",  iconText: "text-violet-300" },
} as const;

export type CardAccent = keyof typeof cardAccentMap;

export const accentCycle: CardAccent[] = ["indigo", "cyan", "fuchsia", "emerald", "orange", "blue", "violet"];
