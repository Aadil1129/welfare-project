import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export default function MachineDescription() {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected1, setIsSelected1] = useState(false);
  const toggleHeart = () => {
    setIsSelected(!isSelected);
  };
  const toggleHeart1 = () => {
    setIsSelected1(!isSelected1);
  };
  return (
    <div className="machineDescription-main">
      <div className="machinDescription-text">
        <div className="machinDescription-heading">Description produit</div>
        <div className="machinDescription-desc">
          Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement
          et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire
          ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il
          est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour
          que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous
          pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art
          de la Table".
        </div>
      </div>
      <div className="description-todo">
        <div className="description-todo-box" onClick={toggleHeart}>
          <div className="description-todo-box-tab">
            <div className="description-todo-text">Livraisons</div>
            {isSelected ? (
              <FaMinus className="description-todo-icon" />
            ) : (
              <FaPlus className="description-todo-icon" />
            )}
          </div>
          <div
            className={isSelected ? "description-todo-box-more-shaw" : "description-todo-box-more"}
          >
            Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre
            évenement
          </div>
        </div>
        <div className="description-todo-box" onClick={toggleHeart1}>
          <div className="description-todo-box-tab">
            <div className="description-todo-text">Questions</div>
            {isSelected1 ? (
              <FaMinus className="description-todo-icon" />
            ) : (
              <FaPlus className="description-todo-icon" />
            )}
          </div>
          <div
            className={
              isSelected1 ? "description-todo-box-more-shaw1" : "description-todo-box-more1"
            }
          >
            et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire
          </div>
        </div>
      </div>
    </div>
  );
}
