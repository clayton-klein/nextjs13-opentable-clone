interface Props {
  inputs: {
    firstName: string;
    lastname: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

export default function AuthModalInputs({
  inputs,
  handleChangeInput,
  isSignIn,
}: Props) {
  return (
    <>
      {/* the email and password inputs will always render, but the others will render
    conditionally */}
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          {/* we need the "name" attribute in the input elements, because we're going
        to use it in the handleChangeInput() to get the properties' names dynamically */}
          <input
            type="text"
            className="w-[49%] border rounded px-2 py-3"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleChangeInput}
            name="firstName"
          />
          <input
            type="text"
            className="w-[49%] border rounded px-2 py-3"
            placeholder="Last Name"
            value={inputs.lastname}
            onChange={handleChangeInput}
            name="lastName"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="email"
          className="w-full border rounded px-2 py-3"
          placeholder="email@example.com"
          value={inputs.email}
          onChange={handleChangeInput}
          name="email"
        />
      </div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="tel"
            className="w-[49%] border rounded px-2 py-3"
            placeholder="Phone"
            value={inputs.phone}
            onChange={handleChangeInput}
            name="phone"
          />
          <input
            type="text"
            className="w-[49%] border rounded px-2 py-3"
            placeholder="City"
            value={inputs.city}
            onChange={handleChangeInput}
            name="city"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="w-full border rounded px-2 py-3"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChangeInput}
          name="password"
        />
      </div>
    </>
  );
}
