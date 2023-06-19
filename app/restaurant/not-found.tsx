"use client";
// not-found files MUST be "client component", because they are special Next.js components

// this kind of file/component behaves in a similar way of the error component, but
// specifically with 404 errors.

import Image from "next/image";
import errorImg from "../../public/icons/error.png";

// Next.js automatically "inject" this error prop of type "Error", so we can use it.
export default function NotFound({ error }: { error: Error }) {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorImg} alt="error mascot" className="w-56 mb-8" />
      <div className="bg-white py-14 px-9 shadow rounded">
        <h3 className="text-3xl font-bold">Something went wrong!</h3>
        {/* this message comes from page.tsx line 37 */}
        <p className="text-base font-bold">
          Sorry, be couldn&apos;t find that restaurant.
        </p>
        <p className="mt-6 text-sm font-light">Error Code: 404</p>
      </div>
    </div>
  );
}
