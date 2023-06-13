export default function Header() {
  return (
    <div>
      <h3 className="font-bold">You&apos;re almost done!</h3>
      <div className="flex mt-5">
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/50216222.webp"
          alt=""
          className="w-32 rounded h-18"
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">Taylor and Clay</h1>
          <div className="flex mt-3">
            <p className="mr-6">Thursday, 22, 2023</p>
            <p className="mr-6">7:30 PM</p>
            <p className="mr-6">3 people</p>
          </div>
        </div>
      </div>
    </div>
  );
}
