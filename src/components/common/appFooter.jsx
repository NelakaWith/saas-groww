import Image from "next/image";
import IconifyClient from "./IconifyClient";

function Footer() {
  return (
    <footer className="py-16 relative overflow-hidden">
      <div className="px-8">
        <div className="flex">
          <Image src="/logoWhiteFull.svg" alt="Logo" width={164} height={48} />
          <div className="border-e border-neutral-400 mx-6"></div>
          <p className="text-xs text-neutral-400">
            Solutions that drive success and propel your business forward
          </p>
        </div>
        <div className="flex gap-2 mt-8 justify-between text-lg font-medium">
          <span>Features</span>
          <span>Integration</span>
          <span>Pricing</span>
        </div>
      </div>
      <div className="mx-8 mt-8 flex flex-col-reverse text-center">
        <p className="text-xs mt-8">
          Copyright © 2024 Designed by Flotr. <br />
          Developed by @NelakaWith. <br />
          All Rights Reserved
        </p>
        <div className="flex gap-2 mt-8 justify-between text-lg font-medium">
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
      <div className="hero-glow h-[600px] absolute -bottom-80 -left-20 -right-20 -z-10"></div>
    </footer>
  );
}

export default Footer;
