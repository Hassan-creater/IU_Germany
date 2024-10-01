import { MyProvider } from "./components/context/Context";
import { Header } from "./components/Header/Header";
import Home from "./components/Home/Home";




function App(){
  return(
    <>
    <MyProvider>
      <Header/>
      <Home/>
    </MyProvider>
    </>
  )
}


export default App;