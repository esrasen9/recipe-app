import Recipe from "../Recipe";
import uuid from 'react-native-uuid'

const TeatimePage = ({teatimeRecipes}) =>  {
    return (
        <div>
            <div className="recipes">
                {
                    teatimeRecipes.map(data => {
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

export default TeatimePage;