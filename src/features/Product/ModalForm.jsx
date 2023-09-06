import React from 'react';

function ModalForm(props) {
    return (
        <>
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal Create</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form method="post" id="formCreate">
                                <div className="d-flex justify-content-around">
                                    <div className="row mb-3 col-lg-6">
                                        <div className="col-lg-12">
                                            <label className="fw-bold">Tên sản phẩm</label>
                                            <input type="text" className="form-control" id="productName" name="productName" />
                                        </div>
                                        <div className="col-lg-6">
                                            <label className="fw-bold">Giá (VNĐ)</label>
                                            <input type="text" className="form-control" id="productPrice" name="productPrice" />
                                        </div>
                                        <div className="col-lg-6">
                                            <label className="fw-bold">Đơn vị tính</label>
                                            <input type="text" className="form-control" id="productUnit" name="productUnit" />
                                        </div>
                                        <div className="col-lg-12">
                                            <label className="fw-bold">Danh mục</label>
                                            <select className="form-select" id="productCategory" name="productCategory">
                                            </select>
                                        </div>
                                        <div className="col-lg-12">
                                            <label className="fw-bold">Mô tả</label>
                                            <input type="text" className="form-control" id="productDescription" name="productDescription" />
                                        </div>
                                    </div>
                                    <div className="row mb-3 col-lg-6 container">
                                        <section>
                                            <div className="mt-lg-5 mb-3">
                                                <img src="/assets/image/upload.jpg" id="image-preview" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <button type="button" id="btnChooseImg" className="btn btn-primary btn-block">Chọn ảnh để upload</button>
                                            <input type="file" id="productImage" name="productImage" accept="image/*" className="form-control" hidden />
                                        </section>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalForm;