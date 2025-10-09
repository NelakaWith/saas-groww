import Image from "next/image";

function Header() {
  return (
    <header className="rounded-full px-6 py-5 glass-xl sticky top-0 mx-auto ">
      <Image src="/logo.svg" alt="Logo" width={40} height={40} />
    </header>
  );
}

export default Header;
