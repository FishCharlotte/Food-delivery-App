import Navigation from './navigation';
import { store } from './store';
import { Provider } from 'react-redux';
import "./global.css";

export default function App() {
  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  );
}
