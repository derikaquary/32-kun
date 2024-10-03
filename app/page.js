import Image from "next/image";
import page1 from "@/public/1.png";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Image src={page1} alt="company profile" fill className="object-cover" />
    </div>
  );
}
