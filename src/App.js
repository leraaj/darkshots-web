import { Route, Routes } from "react-router-dom";
import Landing from "./pages/external/landing/Index";
import Login from "./pages/external/login/Index";
import Registrar from "./pages/external/registrar/Index";
import Accounts from "./pages/internal/accounts/Index";
import Applicants from "./pages/internal/applicants/Index";
import Clients from "./pages/internal/clients/Index";
import Posts from "./pages/internal/posts/Index";

import Jobs from "./pages/internal/jobs/Index";
import Profile from "./pages/internal/profile/Index";
import Orders from "./pages/internal/orders/Index";
import MediaFiles from "./pages/internal/mediaFiles/Index";
import InternalLayout from "./components/shared/layouts/InternalLayout";
import {
  InternalContext,
  InternalContextProvider,
} from "./context/InternalContext";

function App() {
  return (
    <InternalContextProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        {/* Add internal layout */}
        <Route element={<InternalLayout />}>
          <Route path={"/accounts"} element={<Accounts />} />
          <Route path={"/applicants"} element={<Applicants />} />
          <Route path={"/clients"} element={<Clients />} />
          <Route path={"/posts"} element={<Posts />} />

          <Route path={"/jobs"} element={<Jobs />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/orders"} element={<Orders />} />
          <Route path={"/mediaFiles"} element={<MediaFiles />} />
        </Route>
      </Routes>
    </InternalContextProvider>
  );
}

export default App;
