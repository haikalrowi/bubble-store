import { BottomBar } from "./components/BottomBar";
import { Main } from "./components/Main";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <div className="bg-blue-50">
      <div
        className="sticky top-0 z-10 h-12 bg-blue-900 p-4 text-white transition-all
        md:h-20 md:p-8"
      >
        <TopBar />
      </div>
      <div className="h-fit min-h-screen">
        <Main />
      </div>
      <div className="fixed inset-x-0 bottom-0 z-10 h-14 rounded-t-xl bg-white shadow-[0px_4px_12px]">
        <BottomBar />
      </div>
    </div>
  );
}

export default App;
