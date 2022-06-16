import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
   const [searchFiled, setSearchFiled] = useState("");
   const [monsters, setMonsters] = useState([]);

   const onSearchChange = (e) => {
      const searchFiled = e.target.value.toLocaleLowerCase();
      setSearchFiled(searchFiled);
   };

   const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchFiled)
   );
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((users) => setMonsters(users));
   }, []);

   return (
      <div className="App">
         <h1>Monster Rolodex</h1>
         <SearchBox
            onChangeHandle={onSearchChange}
            placeholder="Search Monsters..."
            className="search-box"
         />
         <CardList monsters={filteredMonsters} />
      </div>
   );
};

export default App;
