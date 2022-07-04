import { HamburguerMenu } from "./HamburguerMenu";
import { Logo } from "./Logo";

interface HeaderProps {
  isHamburguerMenuOpen: boolean;
  handleOpenHamburguerMenu: () => void;
  handleCloseHamburguerMenu: () => void;
}

export function Header({
  isHamburguerMenuOpen,
  handleOpenHamburguerMenu,
  handleCloseHamburguerMenu,
}: HeaderProps) {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-gray-700 border-b border-gray-600 lg:py-5 lg:px-0 lg:justify-center">
      <Logo />
      <HamburguerMenu
        isHamburguerMenuOpen={isHamburguerMenuOpen}
        handleOpenHamburguerMenu={handleOpenHamburguerMenu}
        handleCloseHamburguerMenu={handleCloseHamburguerMenu}
      />
    </header>
  );
}
