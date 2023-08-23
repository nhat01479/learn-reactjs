import React, { useState, useEffect } from "react";
import ModalCreate from "./ModalCreate";


function MainContent() {




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
    const [postList, setPostList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const showModalCreate = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        setLoading(true)
        const getAllPost = async () => {
            const res = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${currentPage}&_limit=9`);
            const postList = await res.json();
            setPostList(postList);
            setTotalPages(Math.ceil(Number(postList.pagination._totalRows) / Number(postList.pagination._limit)));
            setLoading(false)
        }
        getAllPost()
    }, [currentPage])


    return (


        <>
            {loading ? (<div class="d-flex justify-content-center align-items-center vh-100">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>) : (
                <div className="container">
                    <ModalCreate showModal={showModal}
                        showModalCreate={showModalCreate}
                        closeModal={closeModal}
                    />

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        {postList?.data?.map((element, index) => (

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
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3  justify-content-center">
                        <div>
                            {/* <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li role="button" className={`${currentPage === 1 ? 'page-item disabled' : 'page-item'}`}                            >
                                        <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                                    </li>
                                    {
                                        totalPages > 1 ? (
                                            <>
                                                {
                                                    currentPage !== 1 ? (
                                                        <>
                                                            <li role="button">
                                                                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>{currentPage - 1}</button>
                                                            </li>
                                                        </>
                                                    ) : ''
                                                }
                                                <li role="button">
                                                    <button className="page-link active" >{currentPage}</button>
                                                </li>

                                            </>
                                        ) : ''
                                    }

                                    {
                                        currentPage < totalPages ? (
                                            <>
                                                <li role="button">
                                                    <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} >{currentPage + 1}</button>
                                                </li>
                                            </>
                                        ) : ''
                                    }
                                    <li role="button" className={`${currentPage === totalPages ? 'page-item disabled' : 'page-item'}`}>
                                        <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                                    </li>
                                </ul>
                            </nav> */}
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                                    </li>
                                    {[...Array(totalPages > 3 ? 3 : totalPages).keys()].map(index => {
                                        const page = currentPage === 1 ? index + 1 : currentPage === totalPages ? totalPages - 2 + index : currentPage - 1 + index;
                                        return (
                                            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                                                <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
                                            </li>
                                        );
                                    })}
                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                                    </li>
                                </ul>
                            </nav>

                        </div>

                    </div>

                </div >
            )}

        </>


    )
}

export default MainContent