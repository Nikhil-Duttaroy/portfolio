export default function Home() {
  return (
    // <main className="w-full h-dvh p-4">
    //   <h1>Initial Setup</h1>
    // </main>

    <div className=" w-full h-dvh p-8 grid grid-cols-12 grid-rows-9 gap-4 bg-darkBackground">
      <div className="col-span-3 row-span-9 bg-primaryBackground broder border-primaryAccent rounded-3xl"></div>
      <div className="col-span-4 row-span-5 col-start-4 bg-primaryBackground broder border-primaryAccent rounded-3xl"></div>
      <div className="col-span-4 row-span-4 col-start-4 row-start-6 bg-primaryBackground broder border-primaryAccent rounded-3xl"></div>
      <div className="col-span-4 row-span-5 col-start-8 row-start-1 bg-primaryBackground broder border-primaryAccent rounded-3xl"></div>
      <div className="col-span-3 row-span-3 col-start-8 row-start-6 bg-primaryBackground broder border-primaryAccent rounded-3xl"></div>
      <div className="col-start-12 row-start-9 rounded-3xl"></div>
    </div>
  );
}
