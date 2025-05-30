import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";

const actions = [
  {
    title: "Add income",
    description: "Create an income manually",
    icon: PlusCircleIcon,
    iconColor: "bg-green-100  text-green-600 px-1 py-1",
  },
  {
    title: "Add expense",
    description: "Create an expense manually",
    icon: MinusCircleIcon,
    iconColor: "bg-red-100 text-red-600 px-1 py-1",
  },
];

export default function QuickActions() {
  return (
    <div className="flex flex-row gap-6 justify-center w-full ">
      {actions.map(({ title, description, icon: Icon, iconColor }) => (
        <div
          className="flex flex-row gap-4 px-6 py-4 items-center  rounded-md  min-w-[400px] h-24 border-4 border-primary-200/60 transition-transform hover:scale-[1.02] bg-primary-50/25"
          key={title}
        >
          <button>
            <Icon className={`${iconColor} w-10  h-10 rounded-md`} />
          </button>
          <div>
            <p className="text-primary-500  font-semibold text-xl">{title}</p>
            <p className="text-primary-600 font-normal text-md">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
