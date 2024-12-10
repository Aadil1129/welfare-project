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
          Festi vous propose a la location un/une "Jewel - grand couteau/10pc" pour votre evenement
          et ce des 0,35 / piece HTVA. Que ce soit pour votre mariage, une fete d'anniversaire ou du
          personnel, ce produit a fait l'objet d'une selection rigoureuse par notre equipe. Il est
          en location chez nous sous la reference "VAJGC". Nous sommes a votre disposition pour que
          les evenements de nos clients, meme en last-minute, soient toujours une reussite. Vous
          pourrez trouver tout une serie d'autre produit a louer de ce type dans la categorie "Art
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
            Festi vous propose a la location un/une "Jewel - grand couteau/10pc" pour votre
            evenement
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
            et ce des 0,35 / piece HTVA. Que ce soit pour votre mariage, une fete d'anniversaire
          </div>
        </div>
      </div>
    </div>
  );
}
