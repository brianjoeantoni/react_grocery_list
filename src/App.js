import Header from './Header';
import Content from './Content';
import Footer from './Footer';
//import Exercise from './Exercise';


function App() {

  return (
    <div className='App'>
      {/* same as <Header></Header> case sensitive */}
      <Header /> 
      {/* <Exercise /> */}
      <Content />
      <Footer />
    </div>    
  );
}

export default App;
