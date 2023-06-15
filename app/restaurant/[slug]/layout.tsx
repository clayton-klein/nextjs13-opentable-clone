import Header from "./components/Header";

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex items-start justify-between w-2/3 m-auto -mt-11">
        {children}
      </div>
    </>
  );
}
