import Image from "next/image";
import page from "@/public/page 1_13.png";
import Page1Content from "@/app/_components/Page1Content";
import Page2Content from "@/app/_components/Page2Content";

function ContentCreator() {
    return (
        <div>
            <Page1Content/>
            <Page2Content/>
        </div>
    )
}

export default ContentCreator
