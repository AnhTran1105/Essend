import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Jewelry from "./pages/admin/Jewelry";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="jewelry" element={<Jewelry />} />
      </Route>
    </Routes>
  );
}

export default App;
