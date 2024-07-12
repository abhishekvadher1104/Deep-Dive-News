import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <div className="container d-flex justify-content-center my-2">
       <h1 className="display-1 text-decoration-underline">D</h1>
       <h3 className="pt-4">EEp</h3>
       <h1 className="display-1 text-decoration-underline mx-2">Dive</h1>
       <h1 className="display-1 text-decoration-underline">N</h1>
       <h3 className="pt-4">ews</h3>
    </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News Pagesize="5" Country="in" Category=""/>} />
          <Route path="/in" element={<News Pagesize="5" Country="in" Category="" />} />
          <Route path="/sa" element={<News Pagesize="5" Country="sa" Category="" />} />
          <Route path="/us" element={<News Pagesize="5" Country="us" Category="" />} />

          <Route path="/in/business" element={<News Pagesize="5" Country="in" Category="business" />} />
          <Route path="/us/business" element={<News Pagesize="5" Country="us" Category="business" />} />
          <Route path="/sa/business" element={<News Pagesize="5" Country="sa" Category="business" />} />

          <Route path="/in/entertainment" element={<News Pagesize="5" Country="in" Category="entertainment" />} />
          <Route path="/us/entertainment" element={<News Pagesize="5" Country="us" Category="entertainment" />} />
          <Route path="/sa/entertainment" element={<News Pagesize="5" Country="sa" Category="entertainment" />} />

          <Route path="/in/health" element={<News Pagesize="5" Country="in" Category="health" />} />
          <Route path="/us/health" element={<News Pagesize="5" Country="us" Category="health" />} />
          <Route path="/sa/health" element={<News Pagesize="5" Country="sa" Category="health" />} />

          <Route path="/in/sports" element={<News Pagesize="5" Country="in" Category="sports" />} />
          <Route path="/us/sports" element={<News Pagesize="5" Country="us" Category="sports" />} />
          <Route path="/sa/sports" element={<News Pagesize="5" Country="sa" Category="sports" />} />

          <Route path="/in/science" element={<News Pagesize="5" Country="in" Category="science" />} />
          <Route path="/us/science" element={<News Pagesize="5" Country="us" Category="science" />} />
          <Route path="/sa/science" element={<News Pagesize="5" Country="sa" Category="science" />} />

          <Route path="/in/technology" element={<News Pagesize="5" Country="in" Category="technology" />} />
          <Route path="/us/technology" element={<News Pagesize="5" Country="us" Category="technology" />} />
          <Route path="/sa/technology" element={<News Pagesize="5" Country="sa" Category="technology" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
