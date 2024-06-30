import PageHeader from "../../../components/PageHeader";
import { SearchlightIcon } from "../../../components/icons";

const About = () => {
  return (
    <div>
      <PageHeader
        image="/about.jpg"
        title="Nethub at a glance"
        pre_title="company overview"
        icon={<SearchlightIcon />}
      />
    </div>
  );
};

export default About;
