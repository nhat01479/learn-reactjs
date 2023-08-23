import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function StudentList() {
    const [studentList, setStudentList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        async function getAllStudent() {
            const res = await fetch(`https://js-post-api.herokuapp.com/api/students?_limit=9_page=${currentPage}`);
            let dataRes = await res.json();

            setStudentList(dataRes.data);
            setTotalPage(Math.ceil(Number(dataRes.pagination._totalRows) / Number(dataRes.pagination._limit)))
            setLoading(false);
        }
        getAllStudent();
    }, [currentPage])


    return (
        <div className='container'  style={{ minHeight: 'calc(100vh  - 205px)' }}>
            <h1 className='text-center'>Student List</h1>
            <div className='row'>
                <ul className='pagination'>
                        <ul className="pagination">
                            {/* <li className="page-item ">
                                <button className="page-link" disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" >{currentPage}/ {totalPage}</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" disabled={currentPage === totalPage}
                                    onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                            </li> */}
                             {
                        [...Array(totalPage)].map((page, index) => (
                            <li key={index}>
                                <button 
                                    className={`btn btn-sm ${index == currentPage - 1 ? 'btn-danger' : 'btn-warning'} me-1 text-white`}
                                    onClick={() => setCurrentPage(index + 1)}
                                    >
                                        {index + 1}
                                </button>
                            </li>
                        ))
                    }
                        </ul>
                </ul>
            </div>

            <div className='row'>
                {
                    loading ? (
                        <div class="d-flex justify-content-center align-items-center " >
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        studentList?.map((student) => (
                            <div className='col-sm-4 mb-3' key={student.id}>
                                <div className='card'>
                                    <h3 className='card-header'>{student.name}</h3>
                                    <div className='card-body'>
                                        <p><span className='fw-bolder'>ID: </span>{student.id}</p>
                                        <p><span className='fw-bolder'>Age: </span>{student.age}</p>
                                        <p><span className='fw-bolder'>Mark: </span>{student.mark}</p>
                                        <p><span className='fw-bolder'>Gender:</span>{student.gender}</p>
                                        <p><span className='fw-bolder'>City: </span>{student.city}</p>
                                    </div>
                                    <div className='card-footer'>
                                        <Link to={`/student/${student.id}`} className='btn btn-primary'>
                                            Detail
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default StudentList;