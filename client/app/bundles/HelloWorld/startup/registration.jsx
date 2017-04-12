import ReactOnRails from 'react-on-rails';

import CustomRouter from '../components/CustomRouter';

// This is how react_on_rails can see the CustomRouter in the browser.
ReactOnRails.register({
  CustomRouter,
});
