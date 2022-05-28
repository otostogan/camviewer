import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {alert} from '../../redux/actions';
import {Button, Modal} from 'rsuite';


export const AlertModal = () => {

    const {alertModal} = useSelector(state => state);

    const dispatch = useDispatch();
    
    const handleClose = () => dispatch(alert(false));

    return(
        <div className="modal-container">
            <Modal backdrop="static" role="alertdialog" 
            open={alertModal.open} 
            onClose={handleClose} size="xs">
                <Modal.Body>
                {alertModal.text}
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={handleClose} appearance="primary">
                    Ok
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
    
}