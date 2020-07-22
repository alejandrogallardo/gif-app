import React from 'react'
import { useFetchGifs } from '../hooks/useFechtGifs'
import { GifGidItem } from './GifGridItem';
// import { getGIfs } from '../helpers/getGifs';

// useEffect: ejecuta codigo de manera condicional

export const GifGid = ( { category } ) => {

    // const [getImages, setImages] = useState([]);

    const {data, loading} = useFetchGifs( category );
   
    // useEffect(() => {
    //     getGIfs( category )
    //         .then(setImages);
    // }, [category] );

    
    return (
        <>
            <h2>{ category }</h2>
            {/* {loading ? 'Cargando...' : 'Data cargada'} */}
            { loading && <p>Loading...</p>}
            <div className="card-grid">
                    {
                        data.map( img => (
                            <GifGidItem 
                                key={img.id}
                                {...img} />
                        ))
                    }
            </div>
        </>
    )
}