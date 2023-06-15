import MenuCard from "./MenuCard";
import { Item } from "@prisma/client";

export default function Menu({ menu }: { menu: Item[] }) {
  return (
    <main className="mt-5 bg-white">
      <div>
        <div className="pb-1 mt-4 mb-1">
          <h1 className="text-4xl font-bold">Menu</h1>
        </div>
        {menu.length ? (
          <div className="flex flex-wrap justify-between">
            {menu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between">
            <p>Sorry, but this restaurant doesn&apos;t provide a menu.</p>
          </div>
        )}
      </div>
    </main>
  );
}
