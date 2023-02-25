import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ShowGPResult = (props) => {
    const { result, resultproperty } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='font-bold' id="contained-modal-title-vcenter">
                    {resultproperty.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3 className='text-xl font-semibold'>{resultproperty?.first}: <span className='text-2xl'>&#x9F3;</span> {result} </h3>
            </Modal.Body>
            <Modal.Footer>
                <Button className='bg-primary' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShowGPResult;