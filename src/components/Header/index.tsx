import { ChangeThemeButton } from "./ChangeThemeButton";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  return (
    <header className="inline-flex items-center justify-between h-16 w-full px-4 py-4 bg-gray-900 text-gray-50">
      <Logo />

      <SearchBox />

      <ChangeThemeButton />
    </header>
  );
};
