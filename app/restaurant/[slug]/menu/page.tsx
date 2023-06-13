import NavBar from "../../../components/NavBar";
import Header from "../components/Header";
import Menu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";

export default function RestaurantMenu() {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <div className="m-auto bg-white max-w-screen-2xl">
        <NavBar />
        <Header />
        <div className="flex items-start justify-between w-2/3 m-auto -mt-11">
          <div className="w-full p-3 bg-white rounded shadow">
            <RestaurantNavBar />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
