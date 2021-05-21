import './App.css';
import Header from './components/header';
import { Footer } from './components/footer';
import { MainComponent } from './components/main';
import { EmployeeForm } from './components/add-employee';

function App() {
  return (
    <div className="App">
     <Header heading='This is header'></Header>
     <EmployeeForm></EmployeeForm>
     <MainComponent></MainComponent>
     <Footer msg='@copyright www.acmemis.com'></Footer>
    </div>
  );
}

export default App;
