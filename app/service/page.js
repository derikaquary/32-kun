import Page1Service from "../_components/Page1Service";
import Page2Service from "../_components/Page2Service";
import Page3Service from "../_components/Page3Service";

function Service() {
  return (
    <div className="overflow-auto">
    <Page1Service/>
    <Page2Service/>
    <Page3Service/>
    </div>
  );
}

export default Service;
