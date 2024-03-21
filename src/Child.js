import userContext from "./Context"
import './App.css';

function Child() {

    // creating the consumer to consume the object send fromt the provider
    return (
        <userContext.Consumer>
            {
                // inside the jsx syntax we pass the callback function to access the data passed from the provider
                (user) => {
                    return (
                        <div className="App">
                            <p>in the child component {user.userId}</p>
                            <p>in the child component {user.name}</p>
                            <p>in the child component {user.country}</p>
                        </div>
                    )
                }
            }
        </userContext.Consumer>
    )
}
export { Child }