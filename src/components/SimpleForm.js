import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Review from './Review';

class SimpleForm extends Component {
    render() {
      return (
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'What document can I help you with?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Great! Let me get that answer for you',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
            },
           
          ]}
        />
      );
    }
  }
  
  export default SimpleForm;