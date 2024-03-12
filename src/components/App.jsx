import { Phonebook } from "./Phonebook/Phonebook";
// eslint-disable-next-line no-unused-vars
import toast, { Toaster } from 'react-hot-toast';

// adding random comment

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101'
      }}
    >
      <Phonebook />
      <Toaster />
    </div>
  );
};
