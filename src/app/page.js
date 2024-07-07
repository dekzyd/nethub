import BestValues from "../../components/BestValues";
import FeedbackSlider from "../../components/FeedbackSlider";
import Mission from "../../components/Mission";
import Slider from "../../components/Slider";
import Divider from "../../components/divider";

export default function Home() {
  return (
    <main className="">
      <Slider />
      {/* <Divider fill="#EE4E4E" /> */}
      {/* mission */}
      <Mission />
      {/* Best values */}
      <BestValues />
      {/* feedback from happy customers */}
      <Divider fill="#F0F2F3" />
      <FeedbackSlider flip />
    </main>
  );
}
