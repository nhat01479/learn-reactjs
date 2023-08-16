import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

function ProductList(props) {
    const [productList, setProductList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    // const [keyword, setKeyword] = useState('');
    // const [limit, setLimit] = useState(2);
    const [pageable, setPageable] = useState({
        keyword: '',
        limit: 2,
        sortBy: 'id',

    })

    // const [pageable, setPageable] = useState({
    //     page: 1,
    //     limit: 5
    // })

    useEffect(() => {
        //http://localhost:28002/api/products?keySearch=&page=1&sort-by=price&dimension=desc&limit=5
        fetch(`http://localhost:28002/api/products?keySearch=${pageable.keyword}&page=${currentPage + 1}&limit=${pageable.limit}`, {
            headers: {
                'Authorization': "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuZ3V5ZW4iLCJpYXQiOjE2OTIxNzUyNDIsImV4cCI6MTY5NDc2NzI0Mn0.Kb0Lsky-oIfSU7AXgQSuJu0_cmAIPj7-pBBszrsEc1Y"
            }
        }

        )
            .then(response => response.json())
            .then(data => {
                setProductList(data.content);
                setTotalPages(data.totalPages);

                // setPageable(data.pageable);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [currentPage, pageable]);

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handleSetPageable = (e) => {
        console.log(pageable.limit);
        console.log(pageable.keyword);
        setPageable({
            ...pageable,
            [e.target.name]: e.target.value
        })
        setCurrentPage(0)

    }

    return (
        <div className=''>
            <div className="card">
                <div className="card-body table-responsive">
                    <div className="d-flex justify-content-between align-self-center">
                        <div>
                            <button className="btn btn-outline-primary m-3" id="btnShowCreateModal">
                                <i className="fas fa-plus" /> New Product
                            </button>
                        </div>
                        <div className="m-3" style={{ height: '30px' }}>
                            <form>
                                <div className="container-search d-flex">
                                    <div className="d-flex " style={{ border: '1px solid lightgrey', borderRadius: '5px' }}>
                                        <input type="search" name="keyword" value={pageable.keyword}
                                            onInput={handleSetPageable}
                                            style={{ border: 'none' }} width="300px" className="form-control" />
                                        <button type="button" className="btn btn-outline-success" style={{ border: 'none' }} >
                                            <i className="fas fa-search" /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id="datatable-buttons_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                        <div className="row">
                            <div className="col-sm-12" style={{ height: 'calc(100vh - 215px)' }}>
                                <table className="table table-striped table-hover flex-grow-1" id="tbProduct">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '50px' }}>ID</th>
                                            <th className="col-2">Hình ảnh</th>
                                            <th className="col-2">Tên sản phẩm</th>
                                            <th className="col-1">Giá <i id="sortByPrice" className="fas fa-sort asc" /></th>
                                            <th className="col-3">Mô tả</th>
                                            <th className="col-1">Danh mục</th>
                                            <th className="col-1" style={{ width: '80px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productList.map((item) => (
                                                <ProductItem key={item.id} product={item} />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='d-flex justify-content-between'>
                    <div>
                        <select className="form-select" name="limit" onChange={handleSetPageable} value={pageable.limit}>
                            <option value="2">Show 2 items</option>
                            <option value="8">Show 8 items</option>
                        </select>
                    </div>
                    <div>
                        <ul className="pagination justify-content-end">
                            <li className="page-item">
                                <button className="page-link" >{currentPage + 1}/ {totalPages} pages</button>
                            </li>
                            {/* <li className="page-item">
                                <input type="number" className='form-control' style={{width: '50px'}} onChange={(e) => setCurrentPage(e.target.value - 1)}/>
                            </li> */}
                            <li className="page-item">
                                <button className="page-link" onClick={handlePrevPage} >Previous</button>
                            </li>
                           
                            <li className="page-item">
                                <button className="page-link" onClick={handleNextPage} >Next</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductList;