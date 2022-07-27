import { useState, useEffect } from "react";
import Card from "../Card";

export default function List ({statement, removeCard}) {

    return (
        <ul>
            {statement && statement.map((item, index)=> {
                return (
                    <li key={index} id={index}>
                        <Card
                            description={item.description}
                            value={item.value}
                            typeOfValue={item.typeOfValue}
                            removeCard={() => removeCard(index)}
                        />
                    </li> 
                )  
            })}
        </ul>
    )
}