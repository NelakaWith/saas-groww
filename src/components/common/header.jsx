import Image from "next/image";
import Button from "../common/button";
import IconArrowCircleUpright from "../vectors/arrowCircleUpright";

function Header() {
  return (
    <header className="rounded-full px-6 py-5 glass-xl fixed start-0 end-0 top-5 z-10 mx-5 my-2 flex justify-between items-center">
      <Image src="/logo.svg" alt="Logo" width={40} height={40} />
      <Button text="Book Now" icon={<IconArrowCircleUpright size={24} />} />
      <Image src="/hamburger.svg" alt="Menu" width={40} height={40} />
    </header>
  );
}

export default Header;
