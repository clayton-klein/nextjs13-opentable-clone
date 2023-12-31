export default function Form() {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="p-3 mb-4 border rounded w-80"
        placeholder="First name"
      />
      <input
        type="text"
        className="p-3 mb-4 border rounded w-80"
        placeholder="Last name"
      />
      <input
        type="tel"
        className="p-3 mb-4 border rounded w-80"
        placeholder="Phone number "
      />
      <input
        type="email"
        className="p-3 mb-4 border rounded w-80"
        placeholder="E-mail "
      />
      <input
        type="text"
        className="p-3 mb-4 border rounded w-80"
        placeholder="Occasion (optional) "
      />
      <input
        type="text"
        className="p-3 mb-4 border rounded w-80"
        placeholder="Requests (optional)"
      />
      <button className="w-full p-3 font-bold text-white bg-red-600 rounded disabled:bg-gray-300">
        Complete reservation
      </button>
      <p className="mt-4 text-sm">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </div>
  );
}
