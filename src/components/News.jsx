/* eslint-disable react/prop-types */
import NewsItem from "./NewsItem";

function News(props) {
  return (
    <div className="container  m-auto">
      <NewsItem Pagesize={props.Pagesize} Country={props.Country} Category={props.Category} />
    </div>
  );
}

export default News;
