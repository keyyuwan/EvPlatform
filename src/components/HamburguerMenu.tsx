import { List, X } from "phosphor-react";

interface HamburguerMenuProps {
  isHamburguerMenuOpen: boolean;
  handleOpenHamburguerMenu: () => void;
  handleCloseHamburguerMenu: () => void;
}

export function HamburguerMenu({
  isHamburguerMenuOpen,
  handleOpenHamburguerMenu,
  handleCloseHamburguerMenu,
}: HamburguerMenuProps) {
  return (
    <div className="flex items-center gap-2 lg:hidden">
      <span className="text-sm">Aulas</span>

      {isHamburguerMenuOpen ? (
        <button onClick={handleCloseHamburguerMenu}>
          <X size={32} className="text-blue-500" />
        </button>
      ) : (
        <button onClick={handleOpenHamburguerMenu}>
          <List size={32} className="text-blue-500" />
        </button>
      )}
    </div>
  );
}
