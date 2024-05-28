"use client";

import Link from "next/link";

function Home() {
  return (
    <>
      <div className="text-blue-400 flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="font-semibold text-[28px] mb-10">Boards Examples</h1>
        <Link href="/pages/first">Boards Examples 1</Link>
        <Link href="/pages/second">Boards Examples 2</Link>
      </div>
    </>
  );
}

export default Home;
