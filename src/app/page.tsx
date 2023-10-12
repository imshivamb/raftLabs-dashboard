import Header from "@/components/Header";
import Main from "@/components/Main";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="bg-white mt-8 rounded-md shadow-sm flex h-full">
        <Sidebar />

        <div className="flex-1 p-4">
          <Header />
          <Main />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
