import Form from "./components/Form";
import Header from "./components/Header";

export default function ReservationPage() {
  return (
    <>
      <div className="h-screen border-t">
        <div className="w-3/5 m-auto py-9">
          <Header />
          <Form />
        </div>
      </div>
    </>
  );
}
