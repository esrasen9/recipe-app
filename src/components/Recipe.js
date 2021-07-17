import React,{useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import "./Recipe.css";

const Recipe = ({recipe}) =>  {
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const {label,image,url,ingredientLines} = recipe;

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const openModal = () => {
        setModalIsOpen(true);
    }

    return (
        <div className="recipe-container">
            <img onClick={openModal} className="recipe-image" src={image} alt=""/>
            <div className="recipe-caption">
                <h3 onClick={openModal} className="recipe-title">{label}</h3>
                <button
                    onClick={openModal}
                    className="recipe-btn">View Recipe</button>
            </div>
            {modalIsOpen &&
            (<Modal
                source={url}
                image={image}
                ingredientLines={ingredientLines}
                title={label}
                onCancel={closeModal} />)}
            {modalIsOpen && <Backdrop onCancel={closeModal} />}
        </div>
    );
}

export default Recipe;