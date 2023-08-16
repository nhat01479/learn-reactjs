import React, { useState, useEffect } from "react";


function MainContent() {


    const [photos, setPhotos] = useState([]);

    // useEffect(() => {
    //     fetch('https://js-post-api.herokuapp.com/api/posts')
    //         .then(response => response.json())
    //         .then(data => setPhotos(data))
    // }, []);

    // useEffect(() => {
    //     async function getAllPost() {
    //         const res = await fetch('https://js-post-api.herokuapp.com/api/posts');
    //         const data = await res.json();
    //         setPhotos(data);
    //     }
    //     getAllPost()
    // }, [])

    useEffect(() => {
        const getAllPost = async () => {
            const res = await fetch('https://js-post-api.herokuapp.com/api/posts');
            const data = await res.json();
            setPhotos(data);
        }
        getAllPost()
    })

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">


                {photos.map((element, index) => (

                    <div className="col" key={index}>
                        <div className="card shadow-sm" >
                            <img className="bd-placeholder-img card-img-top" src={element.imageUrl} width='100%' height='225px' alt="" />
                            <div className="card-body">
                                <p className="card-text">{element.title}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-muted"></small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default MainContent