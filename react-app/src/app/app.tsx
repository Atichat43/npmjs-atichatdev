// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { ReactLib } from '@atichatdev/react-lib';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <ReactLib />
      <NxWelcome title="react-app" />
    </div>
  );
}

export default App;
