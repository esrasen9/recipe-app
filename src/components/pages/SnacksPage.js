import Recipe from "../Recipe";
import uuid from 'react-native-uuid'

const SnacksPage = ({snackRecipes}) =>  {
    return (
        <div>
            <div className="recipes">
                {
                    snackRecipes.map(data => {
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

export default SnacksPage;