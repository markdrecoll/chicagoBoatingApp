import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ViewItinerary = (props) => {

    let iData = props.itineraryData;
    let activity = iData.filter(data => props.date === data.date);

    const {
        //     buttonLabel,
        className,
        //     date,
        //     text
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="secondary" className="btn-sm" onClick={toggle}>View Itinerary</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}></ModalHeader>
                {activity.map(data => (
                    <ModalBody key={data.date}>
                        {data.date}<br />
                        {data.text}
                    </ModalBody>
                ))}
                <ModalFooter>
                    <Button color="secondary" className="btn-sm" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ViewItinerary;