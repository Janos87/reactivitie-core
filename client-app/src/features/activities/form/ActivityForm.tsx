import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function ActivityForm(){
    return(
        <Segment clearing>
            <Form>
                <Form.Input placholder='Title' />
                <Form.TextArea placholder='Description' />
                <Form.Input placholder='Category' />
                <Form.Input placholder='Date' />
                <Form.Input placholder='City' />
                <Form.Input placholder='Venue' />
                <Button floated="right" positive type='submit' content='Submit' />
                <Button floated="right" type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}