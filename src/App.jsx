import { BrowserRouter } from 'react-router'
import Header from './components/Header/Header/Header'
import AppRoutes from './routes'

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <main>
        <AppRoutes/>
      </main>
    </div>
    </BrowserRouter>
  );
}


