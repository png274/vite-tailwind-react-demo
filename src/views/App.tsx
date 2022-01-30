import React from 'react';
import MainContext, {defaultValue} from '../utils/context';
import Home from './Home';

interface Props {}
const App: React.FC<Props> = ({}) => {
  return <MainContext.Provider value={defaultValue}><Home/></MainContext.Provider>;
};
export default App;