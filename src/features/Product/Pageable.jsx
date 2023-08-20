import React from 'react';

function Pageable(props) {
    const {handleSetPageable, handlePrevPage, handleNextPage, currentPage, setCurrentPage, totalPages, pageable} = props;
    return (
        <div className='d-flex justify-content-between'>
                    <div>
                        <select className="form-select" name="limit" onChange={handleSetPageable} 
                            value={pageable.limit} >
                            <option value="5" >Show 5 items</option>
                            <option value="2">Show 2 items</option>                            
                        </select>
                    </div>
                    <div>
                        <ul className="pagination justify-content-end">                       
                            <li className="page-item">
                                <input type="number" className='form-control' style={{width: '50px'}} onChange={(e) => setCurrentPage(e.target.value - 1)}/>
                            </li>
                            <li className="page-item">
                                <button className="page-link" onClick={handlePrevPage} disabled={currentPage === 0}>Previous</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" >{currentPage + 1}/ {totalPages}</button>
                            </li>
                          
                            <li className="page-item">
                                <button className="page-link" onClick={handleNextPage} disabled={currentPage === (totalPages - 1)} >Next</button>
                            </li>
                        </ul>
                    </div>
                </div>
    );
}

export default Pageable;