
import BridalMehndiMayunDeal from "@/component/BridalMehndiMayunDeal";
import HairAndBodyCare from "@/component/HairAndBodyCare";
import HeroSection from "@/component/HeroSection";
import MakeupPackages from "@/component/MakeupPackages";
import MakeupProductsShop from "@/component/MakeupProductsShop";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MakeupPackages />
      <HairAndBodyCare />
      <MakeupProductsShop />
      <BridalMehndiMayunDeal />
    </div>
  );
}
