import React from "react";
import { useMyContext } from "./context/store";
import { Route, Routes } from 'react-router-dom';

import Loading from "./pages/Loading";
import Nav from "./components/Nav";
import Landing from "./pages/landing/Landing";
import Category from "./pages/reviews/Category";
import AlbumReview from "./pages/reviews/Review";
import SearchPage from "./pages/search/SearchPage";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";


function App() {
  const { loading } = useMyContext();

  return (
    <React.Fragment>
      { loading && <Loading/> }
      <Nav/>

      <main>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/:slug" element={<Category />} />
          <Route path="/albums/:slug" element={<AlbumReview />} />
          <Route path="/tracks/:slug" element={<AlbumReview />} />
          <Route path="/search/:slug?" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
