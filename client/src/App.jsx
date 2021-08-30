import { useLocation } from 'react-router-dom'
import Router from './Router';
import Admin from './private/Admin';
function App() {
  let path = useLocation().pathname
  return (
    <section className="App">
      {path.includes('/admin') ? <Admin /> : <Router />}
    </section>
  );
}

export default App;
