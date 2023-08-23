import React from 'react';

function ModalCreate(props) {
    const {showModal, showModalCreate, closeModal} = props;
    return (
        <>
            <div>
                {/* <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> */}
            </div>
            <div className="">
                <div className="create-area">
                    <button className="btn btn-warning btn-sm" onClick={showModalCreate}>
                        <i className="fa fa-plus" />
                        Create Post
                    </button>
                </div>
                <div className="row">
                </div>
            </div>
            <div id="create-post-modal" className="modal faded  " tabIndex={-1} style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={closeModal} />
                        </div>
                        <div className="modal-body">
                            <form method="post" id="formCreate">
                                <div className="row mb-3">
                                    <div className="col-lg-6">
                                        <label className="fw-bold">Title</label>
                                        <input type="text" className="form-control" id="title" name="title" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label className="fw-bold">Author</label>
                                        <input type="text" className="form-control" id="author" name="author" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-lg-6">
                                        <label className="fw-bold">Description</label>
                                        <input type="tel" className="form-control" id="description" name="description" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label className="fw-bold">ImgURL</label>
                                        <input type="text" className="form-control" id="imageUrl" name="imageUrl" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                            <button type="button" className="btn btn-primary" id="btnCreate">Create new post</button>
                            <button type="button" className="btn btn-primary" id="btnEdit">Edit post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalCreate;