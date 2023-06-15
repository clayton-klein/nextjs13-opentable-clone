import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap py-3 mt-10 px-36">
        <RestaurantCard />
      </div>
    </>
  );
}
