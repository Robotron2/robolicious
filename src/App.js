// import "./App.css"
import "./index.css"
import Category from "./components/Category"
import Pages from "./pages/Pages"
import { BrowserRouter } from "react-router-dom"
import Search from "./components/Search"
import Header from "./components/Header"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				{/* <Search /> */}
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	)
}

export default App
