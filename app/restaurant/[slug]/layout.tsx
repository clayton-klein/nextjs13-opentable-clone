import Header from "./components/Header";

export default function RestaurantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <>
      <Header name={params.slug} />
      <div className="flex items-start justify-between w-2/3 m-auto -mt-11">
        {children}
      </div>
    </>
  );
}
