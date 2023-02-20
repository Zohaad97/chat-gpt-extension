import MainBody from "./Main";
import Sidebar from "./sidebar";

export default function App() {
  return (
    <div className="overflow-hidden w-full h-full relative">
      <div className="flex h-full flex-1 flex-col md:pl-[260px]">
        <MainBody />
      </div>
      <Sidebar />
    </div>
  );
}
