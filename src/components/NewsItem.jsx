import { useState, useEffect } from 'react';

function NewsItem(props) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, props.Country , props.Category]); // Fetch news whenever page or Country changes

  const fetchNews = () => {
    setLoading(true);
    fetch(`https://newsapi.org/v2/top-headlines?country=${props.Country}&pagesize=${props.Pagesize}&category=${props.Category}&page=${page}&apiKey=d24d9375c6694a80ae1be8e031605c55`)
      .then(response => response.json())
      .then(data => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the news:', error);
        setLoading(false);
      });
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="container flex-col justify-content-center">
      <div className="d-flex flex-wrap justify-content-center mt-5 pl-4">
        {loading ? (
          <div className="text-center"><h1>Loading...</h1></div>
        ) : (
          news.map((article, index) => (
            <div className="m-5" key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src={article.urlToImage ? article.urlToImage : "https://th.bing.com/th/id/OIP.0EqoXLGkv6W1EMFz0KnXCQHaFA?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a href={article.url} className="btn btn-primary">Read more</a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="d-flex justify-content-around mt-5">
        <button type="button" disabled={page === 1} className="btn btn-dark" onClick={handlePrev}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={handleNext}>Next &rarr;</button>
      </div>
    </div>
  );
}

export default NewsItem;
