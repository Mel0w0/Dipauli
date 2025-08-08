import { BrowserRouter } from 'react-router'
import Header from './components/Header/Header/Header'
import AppRoutes from './routes'
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <main>
        <AppRoutes/>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}


