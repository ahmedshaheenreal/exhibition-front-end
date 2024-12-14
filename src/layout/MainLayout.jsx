import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
function MainLayout() {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}
export default MainLayout;
