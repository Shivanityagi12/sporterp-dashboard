import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";
import ProductTable from "./components/ProductTable";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-6">
        <PageHeader />
        <ProductTable />
        <Footer/>
      </div>
    </div>
  );
}

