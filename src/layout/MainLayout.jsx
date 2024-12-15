import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
}
export default MainLayout;
