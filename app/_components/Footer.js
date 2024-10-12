import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] h-[40px] border-t-[1px] border-t-white/60 bg-primary flex flex-row items-center justify-center gap-4">
      <FaInstagram color="white" size={30}/>
      <FaFacebook color="white" size={30}/>
      <FaSquareYoutube color="white" size={30}/>
      <FaTiktok color="white" size={30}/>
    </div>
  );
}

export default Footer;
