import "./Modal.css";
import uuid from 'react-native-uuid'

const Modal = ({onCancel,title,ingredientLines,image,source}) => {
    const cancelHandler = () =>{
        onCancel();
    }
    return (
        <div className='modal'>
            <div className="info-container">
                <h1 className="recipe-title">{title}</h1>
                {
                    <div className="details">
                        <a className="source" href={source}>
                            <img className="recipe-image" src={image} alt={title}/>
                            <span>Click for recipe source!</span>
                        </a>

                        <ul className="ingredient-lines">
                            {
                                ingredientLines.map(line =>
                                    (<li
                                        key={uuid.v1()}
                                        className="line-item">{line}
                                    </li>))
                            }
                        </ul>
                    </div>
                }
            </div>
            <button className='btn' onClick={cancelHandler}>
                Cancel
            </button>
        </div>
    );
}

export default Modal;
