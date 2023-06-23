import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
//import Exercise from './Exercise';


function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Load data from (fake) REST Api 
  useEffect(() => {

    const fetchItems = async () => {
      try {
          const response = await fetch(API_URL);
          if(!response.ok) throw Error('Did not receive expected data');
          const listItems = await response.json();
          setItems(listItems);
          setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    //just to simulate 1 seconds of waiting
    setTimeout(() => {
      fetchItems();
    }, 1000);
  }, [])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }
  const handleCheck = (id) => {
    // console.log(`key: ${id}`)
    const listItems = items.map((item) => item.id === id ? {...item,
    checked: !item.checked } : item)
    setItems(listItems);
  };
  const handleDelete = (id) => {
    // console.log(id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className='App'>
      {/* same as <Header></Header> case sensitive */}
      <Header title='Grocery List' /> 
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      >
      </SearchItem>
      {/* <Exercise /> */}
      <main>
          {isLoading && <p>Loading Items...</p>}
          {fetchError && <p style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && 
        <Content
          items={items.filter(item => ((item.item).toLowerCase())
            .includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        > 
        </Content>}
      </main>
      <Footer 
        length={items.length}
      />
    </div>    
  );
}

export default App;
