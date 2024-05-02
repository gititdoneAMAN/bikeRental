import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex p-4 justify-between bg-[#948979] ">
      <div className="font-bold text-lg">
        <Link to="/">#ROADEXPLORE</Link>
      </div>
      <div className="flex">
        <div className="flex gap-6">
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/bikes">Bikes</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
