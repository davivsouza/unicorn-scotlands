
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";



import { Navbar } from "./components/Navbar";
import { Contato } from "./pages/Contato";
import { Home } from "./pages/Home";
import { Produtos } from "./pages/Produtos";
import { BuyProduct } from "./pages/BuyProduct";
import { Payment } from "./pages/Payment";
import { NossaArte } from "./pages/NossaArte";
import { Carrinho } from "./pages/Carrinho";
import { MinhaConta } from "./pages/MinhaConta";
import "./style.scss"
import { Login } from "./pages/Login";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<BuyProduct />} />
        <Route path="/pagamento" element={<Payment />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/nossa-arte" element={<NossaArte />} />
        <Route path="/minha-conta" element={<MinhaConta />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </Router>
  );
}

export default App;
