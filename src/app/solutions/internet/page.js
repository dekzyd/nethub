import PageHeader from "../../../../components/PageHeader.jsx";
import { SearchlightIcon } from "../../../../components/icons";

const InternetSolutions = () => {
  return (
    <div>
      <PageHeader
        image="/about.jpg"
        title="Internet solutions"
        // pre_title="company overview"
        icon={<SearchlightIcon />}
        height=""
      />
    </div>
  );
};

export default InternetSolutions;
