import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/images/artifishable_logo.png"

function Gallery (props){
    const currentCategory = {
        name: "commercial",
        description:
            "Photos of fishing supplies",
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img src={photo} alt="Commercial Example" className="img-thumbnail mx-1">
                </img>
            </div>
        </section>
    );
}

export default Gallery;