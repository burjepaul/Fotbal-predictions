import React from "react";
import CategoryItem from "../category-item/category-item.component";

import "./prePage.components.styles.scss"

const PrePage = ({currentPath,  handlePredictionCategory}) => {

    const prePageCategories = [
        {
          id: 10,
          title: 'Goals Goals Goals',
          imageUrl : "GoalsImage",
          path: `${currentPath}`
        },
        {
          id: 11,
          title: '1 X 2',
          imageUrl : "1x2Image",
          path: `${currentPath}`
        },
    ]

    return (
        <div className="pre-page-container">
            <CategoryItem key={prePageCategories[0].id} category={prePageCategories[0]} handlePredictionCategory={handlePredictionCategory}/>
            <CategoryItem key={prePageCategories[1].id} category={prePageCategories[1]} handlePredictionCategory={handlePredictionCategory}/>

        </div>
    )
}

export default PrePage