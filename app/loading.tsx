// this files MUST be called "loading", because it's a special Next.js file
// and since it's in the app directory, this one is gonna be the default
// for every page, unless we overwrite it with another nested loading component

import Header from "./components/Header";

export default function Loading() {
  return (
    <div>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <div
            className="animate-pulse bg-slate-200 w-[22%] h-60 m-3 rounded overflow-hidden border cursor-pointer"
            key={num}
          ></div>
        ))}
      </div>
    </div>
  );
}
