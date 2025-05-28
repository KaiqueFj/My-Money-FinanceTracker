import Filter from "./_components/Fillter/Filter";
import UserValues from "./_components/UserValues/UserValues";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between w-full">
      <div className="flex flex-row w-full justify-between">
        <h1 className="text-primary-600 text-6xl">Hello, Kaique</h1>
        <Filter />
      </div>
      <div className="flex items-start justify-between flex-row w-full mt-5">
        <UserValues />
      </div>
    </div>
  );
}
