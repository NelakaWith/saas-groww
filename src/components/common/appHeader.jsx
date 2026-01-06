import Image from "next/image";
import Button from "./button";
import IconArrowCircleUpright from "../vectors/arrowCircleUpright";

function Header() {
  return (
    <header className="rounded-full px-6 py-5 glass-xl fixed start-0 end-0 top-5 z-10 mx-5 my-2 flex justify-between items-center">
      <div className="w-full flex justify-between align-middle items-center">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <nav className="flex items-center">
          <ul>
            <li className="inline-block mx-4 cursor-pointer">Features</li>
            <li className="inline-block mx-4 cursor-pointer">Community</li>
            <li className="inline-block mx-4 cursor-pointer">Integration</li>
            <li className="inline-block mx-4 cursor-pointer">Pricing</li>
            <li className="inline-block mx-4 cursor-pointer">Contact</li>
          </ul>
        </nav>
        <Button text="Book Now" icon={<IconArrowCircleUpright size={24} />} />
        <Image
          src="/hamburger.svg"
          alt="Menu"
          width={40}
          height={40}
          className="lg:hidden"
        />
      </div>
    </header>
  );
}

export default Header;
