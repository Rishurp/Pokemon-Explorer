import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center font-bold bg-gray-100 min-h-screen py-10">
      <p className="text-2xl text-center mt-4 mb-2 text-blue-800">
        Hey! Would you like to check out my Assignment?
      </p>
      <p className="text-xl mb-6 text-gray-600">Click on the links below:</p>
      <ul className="space-y-4">
        <li className="text-lg text-blue-600 hover:underline hover:text-blue-800">
          <Link href="/part1">PartOne</Link>
        </li>
        <li className="text-lg text-blue-600 hover:underline hover:text-blue-800">
          <Link href="/part2">PartTwo</Link>
        </li>
        <li className="text-lg text-blue-600 hover:underline hover:text-blue-800">
          <Link href="/part3">PartThree</Link>
        </li>
      </ul>
    </main>
  );
}
