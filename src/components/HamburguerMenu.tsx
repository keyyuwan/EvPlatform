import { List } from "phosphor-react";

export function HamburguerMenu() {
  return (
    <div className="flex items-center gap-2 lg:hidden">
      <span className="text-sm">Aulas</span>

      <button onClick={() => {}}>
        <List size={32} className="text-blue-500" />
      </button>
    </div>
  );
}
