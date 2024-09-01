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
      <Divider fill="var(--fiord)" />
      <FeaturedProducts />
      <FeedbackSlider flip />
      <Talkwithus />
      <Divider fill="var(--fiord)" />
    </main>
  );
}
