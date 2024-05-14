import "./App.css";
import Navbar from "./components/Navbar";
import Chat from "./components/chat/Chat";
import Details from "./components/detail/Details";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex w-full ">
        <Details className="w-1/3" />
        <Chat className="flex-1"/>
      </div>
    </>
  );
}

export default App;
