import React from 'react';

const MainContext = React.createContext({
  user: {
    name: '',
    age: 0
  }
});

export const defaultValue = {
  user: {
    name: 'Bruce Wayne',
    age: 33
  }
}

export default MainContext;