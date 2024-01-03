import Main from "../../components/Main/main";
import FAQ from "../../components/faq";
import Footer from "../../components/footer/footer";
import Row from "../../components/movieRows";
import { v4 as uuid } from "uuid";

export default function HomePage() {
  return (
    <>
      <Main />
      <Row
        id={uuid()}
        row_id={uuid()}
        title={"Popular"}
        url={"requestPopular"}
      />
      <Row id={uuid()} row_id={uuid()} title={"Horror"} url={"requestHorror"} />
      <Row
        id={uuid()}
        row_id={uuid()}
        title={"Top Rated"}
        url={"requestTopRated"}
      />
      <Row
        id={uuid()}
        row_id={uuid()}
        title={"Trending"}
        url={"requestTrending"}
      />
      <Row
        id={uuid()}
        row_id={uuid()}
        title={"Upcoming"}
        url={"requestUpcoming"}
      />
      <FAQ />
      <Footer />
    </>
  );
}
