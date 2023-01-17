import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ShowResult = (props) => {
    const { result, resultProperty } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='font-bold' id="contained-modal-title-vcenter">
                    {resultProperty.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3 className='text-xl font-semibold'>{resultProperty?.first}: <span className='text-2xl'>&#x9F3;</span>{result.corpus} </h3>
                <h3 className='text-xl font-semibold'>{resultProperty?.second}: <span className='text-2xl'>&#x9F3;</span>{result.totalEearning} </h3>
                <h3 className='text-xl font-semibold'>{resultProperty?.third}: <span className='text-2xl'>&#x9F3;</span>{result.totalDeposited} </h3>
            </Modal.Body>
            <Modal.Footer>
                <Button className='bg-primary' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShowResult;