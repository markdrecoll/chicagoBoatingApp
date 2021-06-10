import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import API from '../utils/api'

const ViewItinerary = (props) => {
    let iData = props.itineraryData;
    //the code to filder iData here
    // let activity = //do the filtering

    const {
        buttonLabel,
        className,
        date,
        text
      } = props;

      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="secondary" className="btn-sm" onClick={toggle}>View Itinerary</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
            {/* {activity} */}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" className="btn-sm" onClick={toggle}>Cancel</Button>
          <Button color="primary" className="btn-sm" onClick={toggle}>Submit</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ViewItinerary;