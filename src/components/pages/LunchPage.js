import Recipe from '../Recipe';
import uuid from 'react-native-uuid'
const LunchPage = ({lunchRecipes,setLunchRecipes}) => {
    return (
        <div>
            <div className="recipes">
            {
                lunchRecipes.map(data => {
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

export default LunchPage;