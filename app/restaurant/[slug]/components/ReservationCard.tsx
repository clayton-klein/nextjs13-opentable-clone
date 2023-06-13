"use client";

export default function ReservationCard() {
  return (
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
      <div className="pb-2 font-bold text-center border-b">
        <h4 className="text-lg mr-7">Make a reservation</h4>
      </div>
      <div className="flex flex-col my-3">
        <label htmlFor="">Party Size</label>
        <select className="py-3 font-light border-b" name="" id="">
          <option value="">1 person</option>
          <option value="">2 people</option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Date</label>
          <input
            className="py-3 font-light border-b w-28"
            type="date"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Time</label>
          <select className="py-3 font-light border-b" name="" id="">
            <option value="">7:30 AM</option>
            <option value="">12:00 PM</option>
            <option value="">19:30 PM</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="w-full h-16 px-4 font-bold text-white bg-red-600 rounded">
          Find a Time
        </button>
      </div>
    </div>
  );
}
