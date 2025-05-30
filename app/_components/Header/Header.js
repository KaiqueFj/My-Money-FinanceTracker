import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="border-b-4 border-primary-200/60 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
