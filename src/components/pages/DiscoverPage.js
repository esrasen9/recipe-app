import Recipe from "../Recipe";
import "./DiscoverPage.css";
import uuid from 'react-native-uuid'

const DiscoverPage = ({handleSearchRecipe,discoverRecipes,setSearchInput,searchInput}) =>  {

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    }

    return (
        <div className="home">
            <div className="search-bar">
                    <input
                        onKeyPress={handleSearchRecipe}
                        value={searchInput}
                        onChange={handleInputChange}
                        className="search-input" type="search" placeholder="Search for a recipe..."/>
            </div>
            <div className="recipes">
                {
                    discoverRecipes.map(data => {
                        const id= uuid.v1();
                        return <Recipe
                            recipe={data.recipe}
                            key={id}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default DiscoverPage;