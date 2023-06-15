import Menu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";

export default function RestaurantMenu() {
  return (
    <div className="w-full p-3 bg-white rounded shadow">
      <RestaurantNavBar />
      <Menu />
    </div>
  );
}
