//Import React: solo va en los archivos donde hago alguna importacion de componentes
import React from "react";
//Estilo general
import "./App.css"; 
//Router Dom --> El BrowserRouter encierra todo!
import { BrowserRouter,Switch,Route} from "react-router-dom";
//Componentes
import NavBar from "./components/navBar";
import ItemListContainer from "./containers/itemListContainer";
// import ItemDetailContainer from "./containers/itemDetailContainer";


function App() {
	return (
		<>
		<BrowserRouter>
			<NavBar/>
			<Switch>
				<Route exact path="/productos">
					<ItemListContainer/>
				</Route>
				{/* <Route path="/category/:id">
					<ItemDetailContainer/>
				</Route> */}
			</Switch>
		</BrowserRouter>
		</>
	);
};

export default App;