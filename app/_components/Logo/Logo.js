import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/logo.png" alt="Logo" width={50} height={50} />
      <span className="text-xl font-bold text-primary-100">My money</span>
    </Link>
  );
}
