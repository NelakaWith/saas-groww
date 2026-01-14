import Image from "next/image";
import IconifyClient from "./IconifyClient";

function Footer() {
  return (
    <footer className="py-16 md:py-8 md:mt-52 relative overflow-hidden">
      <div className="px-8 md:flex md:justify-between">
        <div className="flex md:items-center">
          <Image src="/logoWhiteFull.svg" alt="Logo" width={164} height={48} />
          <div className="border-e border-neutral-400 mx-6 h-12"></div>
          <p className="text-xs text-neutral-400 md:max-w-60">
            Solutions that drive success and propel your business forward
          </p>
        </div>
        <div className="flex gap-2 md:gap-8 mt-8 justify-between text-lg font-medium">
          <span>Features</span>
          <span>Integration</span>
          <span>Pricing</span>
        </div>
      </div>
      <div className="hidden md:block mx-8 my-9 border-b border-neutral-400"></div>
      <div className="mx-8 mt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between text-center">
        <p className="text-xs mt-8 md:text-start">
          Copyright © 2024 Designed by Flotr. <br />
          Developed by @NelakaWith. <br />
          All Rights Reserved
        </p>
        <div className="flex gap-2 md:gap-8 mt-8 justify-between text-lg font-medium">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
        <div className="flex gap-4 mt-8 justify-center">
          <IconifyClient
            icon="prime:twitter"
            className="w-6 h-6 transition-colors cursor-pointer"
          />
          <IconifyClient
            icon="mdi:linkedin"
            className="w-6 h-6 transition-colors cursor-pointer"
          />
          <IconifyClient
            icon="mdi:facebook"
            className="w-6 h-6 transition-colors cursor-pointer"
          />
          <IconifyClient
            icon="mdi:instagram"
            className="w-6 h-6 transition-colors cursor-pointer"
          />
          <IconifyClient
            icon="mdi:github"
            className="w-6 h-6 transition-colors cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
