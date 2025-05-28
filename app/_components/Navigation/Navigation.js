import Link from "next/link";

import {
  BellIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center text-primary-600 gap-16">
        <li>
          <Link href="/" className="transition-colors hover:text-primary-100 ">
            Overview
          </Link>
        </li>

        <li>
          <Link href="/" className="transition-colors hover:text-primary-100 ">
            Transactions
          </Link>
        </li>

        <li>
          <Link href="/" className="transition-colors hover:text-primary-100 ">
            Analytics
          </Link>
        </li>

        <li>
          <Link href="/" className="transition-colors hover:text-primary-100 ">
            Wallet
          </Link>
        </li>

        <div className="flex items-center gap-10 ml-10">
          <li>
            <Link
              href="/"
              className="transition-colors gap-4 hover:text-primary-100 "
            >
              <Cog6ToothIcon className="w-8 h-8transition-colors text-primary-600 group-hover:text-primary-800" />
            </Link>
          </li>

          <li>
            <BellIcon className="w-8 h-8transition-colors text-primary-600  group-hover:text-primary-800" />
          </li>

          <li>
            <Link
              href="/"
              className="transition-colors gap-4 hover:text-primary-100 "
            >
              <UserCircleIcon className="w-8 h-8 transition-colors text-primary-600  group-hover:text-primary-800" />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
