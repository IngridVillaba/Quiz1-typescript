import React from "react";

import {StoryObj, Meta} from '@storybook/react';
import Person from "../../Quiz-1/Exercise2";
import { number, string } from "prop-types";

interface Person{
    name: string,
    lastname: string,
    age: number,
    hobbies: string []
}

export default {
    title: "Person",
    component: Person
}as Meta <typeof Person>;

export const Primary: StoryObj <typeof Person> ={
args:{
    lastname: 'Villalba',
    name: 'Ingrid',  
    // age:{26},
    hobbies:['playmovies','listenmusic','travel']

}
}