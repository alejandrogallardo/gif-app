import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
 
    return (
        <>
            <h2>Gif Expoer</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifGid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}
// api.giphy.com/v1/gifs/search