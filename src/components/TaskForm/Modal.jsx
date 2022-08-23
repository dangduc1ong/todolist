import React from 'react';
import PropTypes from 'prop-types';

const Modal = props => {
    return (
        <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <span id="close" className="close" >
              &times;
            </span>
            <div className="modal-body">
              <form>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="tittle"
                    type="text"
                    placeholder="Tittle"
                    data-sb-validations="required"
                  />
                  <label htmlFor="tittle">Tittle</label>
                  {/* {!formValue.title && (
                    <div style={{ color: "red" }}>Tittle is required.</div>
                  )} */}
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="creator"
                    type="text"
                    placeholder="Creator"
                    data-sb-validations="required"
                  />
                  <label htmlFor="creator">Creator</label>
                  {/* {!formValue.author && (
                    <div style={{ color: "red" }}>Creator is required.</div>
                  )} */}
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="description"
                    type="text"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                    data-sb-validations="required"
                  />
                  <label htmlFor="description">Description</label>
                  {/* {!formValue.description && (
                    <div style={{ color: "red" }}>Description is required.</div>
                  )} */}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                id="add"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Add
              </button>
              <button
                type="button"
                id="close"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

Modal.propTypes = {
    
};

export default Modal;