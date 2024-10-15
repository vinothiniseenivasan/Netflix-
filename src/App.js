import Browse from './Components/Browse';

import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';

function App() {
  return (
    <div  className='bg-black'>
      {/* provide whole store configureStore to root of our componenet */}
      <Provider store={appStore}>
                 <Body />
      </Provider>
      
    </div>
  )
}

export default App;
