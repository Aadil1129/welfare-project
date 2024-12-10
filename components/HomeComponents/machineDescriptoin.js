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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make atype specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has
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
            a galley of type and scrambled it to make atype specimen book. It has survived not only
          </div>
        </div>
      </div>
    </div>
  );
}
