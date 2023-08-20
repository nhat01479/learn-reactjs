import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Pageable from './Pageable';
import ModalForm from './ModalForm';

function ProductList(props) {
    const [productList, setProductList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [sortOrder, setSortOrder] = useState('asc');
    const [showModal, setShowModal] = useState(false);

    // const [keyword, setKeyword] = useState('');
    // const [limit, setLimit] = useState(2);

    const [pageable, setPageable] = useState({
        keyword: '',
        limit: 5,
        sortBy: 'id',
        order: ''
    })

    // const [pageable, setPageable] = useState({
    //     page: 1,
    //     limit: 5
    // })

    useEffect(() => {
        //http://localhost:28002/api/products?keySearch=&page=1&sort-by=price&dimension=desc&limit=5
        fetch(`http://localhost:28002/api/products?keySearch=${pageable.keyword}&sort-by=${pageable.sortBy}&dimension=${pageable.order}&page=${currentPage + 1}&limit=${pageable.limit}`, {
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

        if (e.target.name === 'keyword') {
            setPageable({
                ...pageable,
                [e.target.name]: e.target.value
            })
            setCurrentPage(0)
        } else {
            setPageable({
                ...pageable,
                [e.target.name]: e.target.value
            })
        }

    }

    const handleSortBy = (event) => {

        const sort = event.currentTarget.getAttribute('data-sort');
        const newSortOrder = event.currentTarget.getAttribute('data-order') === 'asc' ? 'desc' : 'asc';

        setSortOrder(newSortOrder);

        setPageable({
            ...pageable,
            sortBy: sort,
            order: newSortOrder
        })

    }



    return (
        <div className=''>

            <ModalForm />
            <div className="card">
                <div className="card-body table-responsive">
                    <div className="d-flex justify-content-between align-self-center">
                        <div>
                            <button className="btn btn-outline-primary m-3" onClick={() => setShowModal(true)}>
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
                            <div className="col-sm-12 table-responsive" style={{ height: 'calc(100vh  - 195px)' }}>
                                <table className="table table-striped table-hover flex-grow-1" id="tbProduct">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '50px', textAlign: 'center' }}>ID <i className="fas fa-sort" data-sort='id' data-order={sortOrder} onClick={handleSortBy} /></th>
                                            <th className="col-2 text-center">Hình ảnh</th>
                                            <th className="col-2">Tên sản phẩm <i className="fas fa-sort" data-sort='title' data-order={sortOrder} onClick={handleSortBy} /></th>
                                            <th className="col-1 text-center">Giá <i className="fas fa-sort" data-sort='price' data-order={sortOrder} onClick={handleSortBy} /></th>
                                            <th className="col-3 text-center">Mô tả</th>
                                            <th className="col-1">Danh mục <i className="fas fa-sort" data-sort='category' data-order={sortOrder} onClick={handleSortBy} /></th>
                                            <th className="col-1" style={{ width: '80px', textAlign: 'center' }}>Action</th>
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
                <Pageable handleSetPageable={handleSetPageable}
                    handlePrevPage={handlePrevPage}
                    handleNextPage={handleNextPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                    pageable={pageable}
                />
            </div>

        </div>
    );
}

export default ProductList;