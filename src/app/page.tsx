import Header from "@/components/Header";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="bg-white mt-4 rounded-md shadow-sm flex">
      <Sidebar />

      <div className="lg:flex-1 p-0 lg:p-4">
        <Header />
        <Main />
      </div>
    </div>
  );
}
