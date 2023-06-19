"use client";

import Image from "next/image";
import errorImg from "../../public/icons/error.png";

// Next.js automatically "inject" this error prop of type "Error", so we can use it.
export default function Error({ error }: { error: Error }) {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorImg} alt="error mascot" className="w-56 mb-8" />
      <div className="bg-white py-14 px-9 shadow rounded">
        <h3 className="text-3xl font-bold">Something went wrong!</h3>
        {/* this message comes from page.tsx line 37 */}
        <p className="text-base font-bold">{error.message}</p>
        <p className="mt-6 text-sm font-light">Error Code: 400</p>
      </div>
    </div>
  );
}
