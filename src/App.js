import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import DiscoverPage from "./components/pages/DiscoverPage"
import LunchPage from "./components/pages/LunchPage";
import SnacksPage from "./components/pages/SnacksPage";
import DinnerPage from "./components/pages/DinnerPage";
import BreakfastPage from "./components/pages/BreakfastPage";
import SignUpPage from "./components/pages/SignUpPage";
import TeatimePage from "./components/pages/TeatimePage";
import {useEffect,useState} from 'react';

function App() {
    const APP_ID = "acae384e";
    const API_KEY = "e2a54ef3be9e41aa0a05dac467bb354c";
    const BASE_URL =`https://api.edamam.com/search`;

    const [dinnerRecipes,setDinnerRecipes] = useState([]);
    const [breakfastRecipes,setBreakfastRecipes] = useState([]);
    const [lunchRecipes,setLunchRecipes] = useState([]);
    const [snackRecipes,setSnackRecipes] = useState([]);
    const [teatimeRecipes,setTeatimeRecipes] = useState([]);
    const [discoverRecipes,setDiscoverRecipes] = useState([]);
    const [randomRecipes,setRandomRecipes] = useState([]);
    const [searchInput,setSearchInput] = useState("");


    const createUrl = (q) => {
       const url = `${BASE_URL}?q=${q}&app_id=${APP_ID}&app_key=${API_KEY}`;
       return url;
    }

    const getRecipes = async (url) => {
       try{
           const response = await fetch(url);
           const data = await response.json();
           return data.hits;
       }catch(error){console.error(error)}
    }

    const handleSearchRecipe = async(e) => {
        if(e.key === "Enter"){
            if(searchInput==="") {
                setDiscoverRecipes(randomRecipes);
                return;
            }
            setResults(searchInput,setDiscoverRecipes);
        }
    }

    const setResults = (q,callback) => {
        const url = createUrl(q);
        getRecipes(url).then(recipes =>{
            (recipes !== undefined && recipes.length > 0) ? callback(recipes)
                : callback(randomRecipes)
        })
    }


    useEffect(()=>{
        setResults("french",setDiscoverRecipes);
        setResults("dinner",setDinnerRecipes);
        setResults("breakfast",setBreakfastRecipes);
        setResults("lunch",setLunchRecipes);
        setResults("snack",setSnackRecipes);
        setResults("teatime",setTeatimeRecipes);
        setResults("random",setRandomRecipes)
    },[]);


    return (
    <div className="App">
        <Navbar/>
        <Route exact path="/">
            <DiscoverPage
                setSearchInput={setSearchInput}
                searchInput={searchInput}
                handleSearchRecipe={handleSearchRecipe}
                discoverRecipes={discoverRecipes}/>
        </Route>
        <Route path="/breakfast">
            <BreakfastPage breakfastRecipes={breakfastRecipes}/>
        </Route>
        <Route path="/lunch">
            <LunchPage lunchRecipes={lunchRecipes} setLunchRecipes={setLunchRecipes}/>
        </Route>
        <Route path="/dinner">
            <DinnerPage dinnerRecipes={dinnerRecipes} />
        </Route>
        <Route path="/snacks">
            <SnacksPage snackRecipes={snackRecipes}/>
        </Route>
        <Route path="/teatime">
            <TeatimePage teatimeRecipes={teatimeRecipes}/>
        </Route>
        <Route path="/signup" component={SignUpPage}/>
    </div>
  );
}

export default App;
