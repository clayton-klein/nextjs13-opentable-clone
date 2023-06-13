import NavBar from "../../components/NavBar";
import Form from "./components/Form";
import Header from "./components/Header";

export default function ReservationPage() {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <div className="m-auto bg-white max-w-screen-2xl">
        <NavBar />
        <div className="h-screen border-t">
          <div className="w-3/5 m-auto py-9">
            <Header />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
