import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

const CreateItinerary = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const toggle = () => setModal(!modal);

  const changeBackdrop = e => {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  }

  return (
    <div>
      {/* modal for taking in a user itinerary */}
      <Button color="primary" onClick={toggle}>Create Itinerary</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.weatherDataStuff.time}</ModalHeader>
        <ModalBody>

            <Form inline onSubmit={(e) => e.preventDefault()}>
            <FormGroup>
            <Label for="itineraryText">What would you like to do?</Label>{' '}
            <Input type="text" name="itineraryText" id="itineraryText" onChange={changeBackdrop} />
            </FormGroup>
            <FormGroup className="mx-2" check>
            </FormGroup>
            {' '}
            </Form>
            
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
          <Button color="primary" onClick={toggle}>Submit</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateItinerary;