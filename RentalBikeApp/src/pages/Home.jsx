import { Link } from "react-router-dom";
import p3 from "../assets/p3.jpg";
export default function Home() {
  return (
    <div className="p-4 mt-4 flex gap-5">
      <div className="w-[100%] rounded-lg">
        <img src={p3} alt="pic" className="rounded-lg" />
      </div>
      <div className="w-[100%] p-2 rounded-lg text-justify bg-gradient-to-r from-[#153448] to-[#3C5B6F] flex justify-center items-center">
        <div>
          <h1 className="font-bold text-[30px]">
            Explore the World on Two Wheels!
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro
            sapiente, quisquam culpa repellendus, illum iusto aperiam, autem
            itaque voluptates totam deleniti magni tempore labore quibusdam.
            Tempore aliquid unde perspiciatis odit quos magni vero laboriosam
            eum non ex optio doloremque facilis iste similique reiciendis at
            est, hic voluptatum laborum cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
}
