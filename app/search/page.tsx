import NavBar from "../components/NavBar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

export default function Search() {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <div className="m-auto bg-white max-w-screen-2xl">
        <NavBar />
        <Header />
        <div className="flex items-start justify-between w-2/3 py-4 m-auto">
          <SearchSideBar />
          <div className="w-5/6">
            <RestaurantCard />
          </div>
        </div>
      </div>
    </div>
  );
}
