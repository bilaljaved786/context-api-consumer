import './App.css';
import userContext from './Context';
import { Child } from './Child';
function App() {

  const userInfo = { userId: 100, name: 'bilal javed mughal', country: 'pakistan' }

  return (
    // creating the provider and passed the value need in the child component
    <userContext.Provider value={userInfo}>
      <div className="App">
        <h2>context api example using consumer</h2>
      </div>
      <Child />
    </userContext.Provider>
  );
}

export default App;

// also need to export the userContext because we need it in the consumer class
export { userContext };