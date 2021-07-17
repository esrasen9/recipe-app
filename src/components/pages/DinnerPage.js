import Recipe from "../Recipe";
import uuid from 'react-native-uuid'

const DinnerPage = ({dinnerRecipes}) =>  {
    return (
        <div>
            <div className="recipes">
            {
                dinnerRecipes.map(data => {
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

export default DinnerPage;