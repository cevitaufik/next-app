import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({main}) {
  return (
    <div>
      <Navbar />

      <main>{main}</main>
      
      <Footer />
    </div>
  )
};
