export default function Reviews() {
  return (
    <div>
      <h1 className="p-5 mt-10 text-3xl font-bold border-b mb-7">
        What 100 people are saying
      </h1>
      <div>
        <div className="border-b pb-7 mb-7">
          <div className="flex">
            <div className="flex flex-col items-center w-1/6">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-400 rounded-full">
                <h2 className="text-2xl text-white">CK</h2>
              </div>
              <p>Clayton Klein</p>
            </div>
            <div className="w-5/6 ml-10">
              <div className="flex items-center">
                <div className="flex mr-5">****</div>
              </div>
              <div className="mt-5">
                <p className="text-lg font-light">
                  Staff were very friendly and dealt efficiently with a
                  misunderstanding over one food order, so good marks for
                  service. The halloumi stack was very tasty and the chicken
                  schnitzel went down well. Recommend!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
