import { createContext } from 'react';


const AppContext = createContext({ repository: '', setRepository: () => {} });


export default AppContext;