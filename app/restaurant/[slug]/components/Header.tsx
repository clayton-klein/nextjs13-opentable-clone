export default function Header({ name }: { name: string }) {
  const renderTitle = () => {
    const nameArray = name.split("-");

    // grab the last word of the slug (the city) in the array and wrap it between parenthesis
    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`;

    return nameArray.join(" ");
  };

  return (
    <div className="overflow-hidden h-96">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-center text-white capitalize text-7xl text-shadow">
          {renderTitle()}
        </h1>
      </div>
    </div>
  );
}
