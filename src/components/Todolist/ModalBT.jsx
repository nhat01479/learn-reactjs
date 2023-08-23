import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} centered={true} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Modal Create</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalExample;