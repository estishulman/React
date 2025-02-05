import { RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Registratio from './components/Registration'
import UserProvider from './components/context/UserProvider'
import router from './router'
import { useState } from 'react'
<<<<<<< HEAD
import Detailes from './components/UserDetailes'
=======
import Detailes from './components/Detailes'
>>>>>>> 28e6f6ec79d9a1f21e1648c55f8236295201e0c6
import Update from './components/Update'
import { Provider } from 'react-redux';
import store from './components/redux/store';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
      <Provider store={store}>
        <UserProvider>
          {isLoggedIn ? (<>
            <Update></Update>
            <Detailes></Detailes></>) :
            (<>
              <Login onLoginSuccess={handleLoginSuccess} />
              <Registratio />
            </>)}
          <RouterProvider router={router} />
        </UserProvider>
      </Provider>
    </>
  )
}
<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 28e6f6ec79d9a1f21e1648c55f8236295201e0c6
