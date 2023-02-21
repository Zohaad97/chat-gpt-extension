import "./App.css";
import Sidebar from "./sidebar";
import Content from "./content";
function App() {
  return (
    <div className="overflow-hidden w-full h-full relative">
      <div className="flex h-full flex-1 flex-col md:pl-[260px]">
        <Content />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
