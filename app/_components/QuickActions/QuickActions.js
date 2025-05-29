import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";

const actions = [
  {
    title: "Add income",
    description: "Create an income manually",
    icon: PlusCircleIcon,
    iconColor: "bg-green-100 text-green-600",
  },
  {
    title: "Add expense",
    description: "Create an expense manually",
    icon: MinusCircleIcon,
    iconColor: "bg-red-100 text-red-600",
  },
];

export default function QuickActions() {
  return (
    <div className="flex flex-row gap-6 justify-center w-full ">
      {actions.map(({ title, description, icon: Icon, iconColor }) => (
        <div
          className="flex flex-row gap-4 px-6 py-4 items-center  rounded-md shadow-lg min-w-[400px] h-24  transition-transform hover:scale-[1.02] bg-primary-100"
          key={title}
        >
          <button className="">
            <Icon className={`${iconColor} w-12  h-12 rounded-md`} />
          </button>
          <div>
            <p className="text-primary-600  font-medium text-xl">{title}</p>
            <p className="text-shadow-primary-250 text-md">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
