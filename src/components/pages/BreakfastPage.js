import Recipe from '../Recipe';
import uuid from 'react-native-uuid'

const BreakfastPage = ({breakfastRecipes}) => {
    return (
        <div>
            <div className="recipes">
                {
                    breakfastRecipes.map(data => {
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

export default BreakfastPage;