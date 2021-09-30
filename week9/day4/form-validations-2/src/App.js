import Form from "./components/Form";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { MainDiv } from "./styled-components/FormStyle";
function App() {
  return (
    (<div className="App">
      
     
      <Header />
      <MainDiv>
      <Sidebar />
      <Form />
      </MainDiv>
    </div>)
  );
}

export default App;
