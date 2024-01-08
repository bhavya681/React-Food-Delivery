import React, { useState } from 'react'
import Cart from "./Cart";
import Buttons from './Buttons';
import Search from './Search';
import Data from "../assets/Data";
import Emotions from './Emotions';
import Filters from './Filters';

const Home = () => {

    const [items, setItems] = useState(Data);

    const menuItems = [...new Set(Data.map((val) => val.category))];

    const filterItems = (cat) => {
        const newItems = Data.filter((newval) => newval.category === cat);
        setItems(newItems);
    };

    const Allitems = () => {
        setItems(Data);
    }

    const filterSearch = (seacrhTerm) => {
        const newSearch = Data.filter((newsrch) => newsrch.name.toLowerCase().includes(seacrhTerm.toLowerCase()));
        setItems(newSearch);
    }

    const emotionItem = [...new Set(Data.map((val) => val.emotions))];

    const filterEmotions = (emo) => {
        const newItems = Data.filter((newval) => newval.emotions === emo);
        setItems(newItems);
    }

    const filterVFood = () => {
        const newVeg = Data.filter((newval) => newval.diet === "Veg");
        setItems(newVeg);
    };

    const filterNVFood = () => {
        const newNVeg = Data.filter((newval) => newval.diet === "Non Veg");
        setItems(newNVeg);
    };

    // const filterPFFood = () => {
    //     const newFP = Data.filter((item) => item.rating >=4 );
    //     setItems(newFP);
    // };

    const filterHighRatedFood = () => {
        // Assuming 'setItems' is a state-setting function to update the displayed items

        // Filter items with a rating greater than or equal to 5
        const highRatedItems = Data.filter((item) => item.rating >= 5);

        // Filter items with a rating of 4 and add them to the result
        const rating4Items = Data.filter((item) => item.rating === 4);

        // Concatenate the two arrays to get the final result
        const finalItems = highRatedItems.concat(rating4Items);

        // Update the displayed items
        setItems(finalItems);
    };

    const filterHightoLowRatedFood = () => {
        // Assuming 'setItems' is a state-setting function to update the displayed items

        // Sort items in descending order based on rating
        const sortedItems = [...Data].sort((a, b) => b.rating - a.rating);

        // Update the displayed items
        setItems(sortedItems);
    };

    const filterLowtoHighRatedFood = () => {
        // Assuming 'setItems' is a state-setting function to update the displayed items

        // Sort items in ascending order based on rating
        const sortedItems = [...Data].sort((a, b) => a.rating - b.rating);

        // Update the displayed items
        setItems(sortedItems);
    };

    const lowToHighprice = () => {

        const newItems = [...Data].sort((a, b) => a.price - b.price);
        setItems(newItems);

    }

    const hightToLowprice = () => {

        const newItems = [...Data].sort((a, b) => b.price - a.price);
        setItems(newItems);

    }

    return (

        <>
            <div>
                <div>
                    <Filters hightToLowprice={hightToLowprice} lowToHighprice={lowToHighprice} filterVFood={filterVFood} filterNVFood={filterNVFood} filterPFFood={filterHighRatedFood}
                        filterLowtoHighRatedFood={filterLowtoHighRatedFood}
                        filterHightoLowRatedFood={filterHightoLowRatedFood}
                    />
                </div>
                <div>
                    <Emotions emotionItem={emotionItem} filterEmotions={filterEmotions} />
                </div>
                <div>
                    <Search filterSearch={filterSearch} Allitems={Allitems} />
                </div>
                <div>
                    <Buttons filterItems={filterItems} menuItems={menuItems} Allitems={Allitems} />
                </div>
                <div>
                    <Cart items={items} setItems={setItems} />
                </div>
            </div>
        </>

    )
}

export default Home