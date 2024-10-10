import Image from "next/image";
import page from "@/public/page 1_13.png";
import Page1Brand from "@/app/_components/Page1Brand";
import Page2Brand from "@/app/_components/Page2Brand";
import Page3Brand from "@/app/_components/Page3Brand";

function BrandActivation() {
  return (
    <>
      <Page1Brand />
      <Page2Brand />
      <Page3Brand/>
    </>
  );
}

export default BrandActivation;
