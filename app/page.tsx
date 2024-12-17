import InfoCard from "@/components/InfoCard";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="w-full  flex flex-col lg:flex-row md:flex-col lg:justify-between h-screen max-h-screen lg:space-y-0 space-y-10 px-5 pt-10 md:px-10 lg:p-20">
      <div className="w-full md:w-1/2 lg:fixed">
        <InfoCard />
      </div>

      <div className="remove-scrollbar lg:w-1/2 w-full  lg:ml-[50%]">
        <Resume />
      </div>
    </main>
  );
}
