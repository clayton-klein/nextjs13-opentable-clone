"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <form className="flex justify-center py-3 m-auto text-lg text-left">
      <input
        className="bg-white text-black rounded mr-3 w-[450px] p-2"
        type="search"
        name=""
        id=""
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="py-2 text-white bg-red-600 rounded px-9"
        onClick={(e) => {
          e.preventDefault();

          if (location === "") return;

          router.push(`/search?city=${location}`);
          setLocation("");
        }}
      >
        Let&apos;s Go!
      </button>
    </form>
  );
}
