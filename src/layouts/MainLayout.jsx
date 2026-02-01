import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "15px", minHeight: "70vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
