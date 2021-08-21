import ContextDisplay from "../components/ContextDisplay";
import ContextChanger from "../components/ContextChanger";
import TailwindDemo from "../components/TailwindDemo";
import ExpressTest from "../components/ExpressTest";
import MongooseTest from "../components/MongooseTest";

export default function Home() {
  return (
    <div className="container mx-auto px-4 space-y-4">
      <ContextDisplay />
      <br />
      <ContextChanger />
      <TailwindDemo />
      <ExpressTest />
      <MongooseTest />
    </div>
  );
}
