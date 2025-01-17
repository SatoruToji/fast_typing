import { Input } from "./input/Input";
import { Nav } from "./nav/Nav";

export function App() {
  return <div className="flex flex-col justify-center min-h-screen">
    <Nav />
    <div className="flex justify-center items-center flex-grow">
      <Input />      
    </div>
  </div>;
}