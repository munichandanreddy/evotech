import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Option2Advance = React.lazy(() => import("pages/Option2Advance"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/option2advance" element={<Option2Advance />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
