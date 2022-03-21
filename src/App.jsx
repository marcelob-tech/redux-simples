import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React Redux (Simples)</h1>
      <div className='linha'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className='linha'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;