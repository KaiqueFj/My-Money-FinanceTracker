import Link from "next/link";

import {
  BellIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center font-semibold text-primary-600 gap-16">
        <li>
          <Link
            href="/"
            className="transition-colors rounded-md p-3 hover:text-primary-100 hover:bg-primary-400 "
          >
            Overview
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className="transition-colors rounded-md p-3 hover:text-primary-100 hover:bg-primary-400 "
          >
            Transactions
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className="transition-colors rounded-md p-3 hover:text-primary-100 hover:bg-primary-400 "
          >
            Analytics
          </Link>
        </li>

        <li>
          <Link
            href="/"
            className="transition-colors rounded-md p-3 hover:text-primary-100 hover:bg-primary-400 "
          >
            Wallet
          </Link>
        </li>

        <div className="flex items-center gap-10 ml-10">
          <li>
            <Link href="/" className="transition-colors rounded-md p-3">
              <Cog6ToothIcon className="w-8 h-8transition-colors  hover:text-primary-100 hover:bg-primary-400 " />
            </Link>
          </li>

          <li>
            <BellIcon className="w-8 h-8transition-colors hover:text-primary-100 hover:bg-primary-400 " />
          </li>

          <li>
            <Link
              href="/"
              className="transition-colors gap-4 hover:text-primary-100 "
            >
              <UserCircleIcon className="w-10 h-10 transition-colors hover:text-primary-100 hover:bg-primary-400 " />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
