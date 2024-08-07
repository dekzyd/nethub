import BestValues from "../../components/BestValues";
import FeaturedProducts from "../../components/FeaturedProducts";
import FeedbackSlider from "../../components/FeedbackSlider";
import Mission from "../../components/Mission";
import Slider from "../../components/Slider";
import Talkwithus from "../../components/Talkwithus";
import Divider from "../../components/divider";

export default function Home() {
  return (
    <main>
      <Slider />
      {/* mission */}
      <Mission />
      {/* Best values */}
      <BestValues />
      {/* feedback from happy customers */}
      <Divider fill="#F0F2F3" />
      <FeaturedProducts />
      <FeedbackSlider flip />
      {/* <Divider fill="#F0F2F3" /> */}
      <Talkwithus />
      <Divider fill="#F0F2F3" />
    </main>
  );
}
