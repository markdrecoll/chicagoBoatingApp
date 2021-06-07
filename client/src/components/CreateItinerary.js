import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import API from '../utils/api'

const CreateItinerary = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const toggle = () => setModal(!modal);

  const [userActivityState, setUserActivityState] = useState("");

  const handleTyping = e => {
      setUserActivityState(e.target.value);
  }

  const handleSave = () => {

    API.saveActivity(userActivityState).then(function(data) {
        console.log('Save happened!', data)
        toggle()
    })


  }

  return (
    <div>
      {/* modal for taking in a user itinerary */}
      <Button color="primary" className="btn-sm" onClick={toggle}>Create Itinerary</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.weatherDataStuff.time}</ModalHeader>
        <ModalBody>

            <Form inline onSubmit={(e) => e.preventDefault()}>
            <FormGroup>
            <Label for="itineraryText">Below you can save your intended activities for the day.</Label>{' '}
            <Input type="textarea" name="itineraryText" id="itineraryText" onChange={handleTyping} />
            </FormGroup>
            <FormGroup className="mx-2" check>
            </FormGroup>
            {' '}
            </Form>
            
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" className="btn-sm" onClick={toggle}>Cancel</Button>
          <Button color="primary" className="btn-sm" onClick={handleSave}>Submit</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateItinerary;