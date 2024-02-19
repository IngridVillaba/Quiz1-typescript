import React from "react";

import {StoryObj, Meta} from '@storybook/react';
import OptionalMessage from "../../Quiz-1/Exercise5";



export default{
    title: "OptionalMessages",
    component: OptionalMessage
} as Meta <typeof OptionalMessage>;

export const Primary: StoryObj <typeof OptionalMessage> ={
    args: {
        message: 'Hello, good day'
    }
    
}