import './styles/reset.css';
import './styles/global.css';
import './styles/animations.css';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout/Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Layout />
);