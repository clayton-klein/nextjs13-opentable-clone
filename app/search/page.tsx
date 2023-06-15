import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

export default function Search() {
  return (
    <>
      <Header />
      <div className="flex items-start justify-between w-2/3 py-4 m-auto">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}
