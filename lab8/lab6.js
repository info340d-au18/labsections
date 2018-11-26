import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

// Simple code without dependency injection
const foo = (url) => {
    fetch(url).then(() => { doSomething() });
}
foo('totallyrealurl.com/apiendpoint?=params');

// Code with dependency injection
const foo = (url, fetchIn) => {
    fetchIn(url).then(() => { doSomething() });
}
foo('totallyrealurlagain.com/apiendpoint?=params', fetch);

// in App.test.js
const firebase = {
    auth: () => firebaseAuth()
}

const firebaseAuth = jest.fn().mockImplementation(() => {
    return {
        onAuthStateChanged: () => onAuthStateChanged()
    };
});

const onAuthStateChanged = jest.fn().mockImplementation((fbUser) => {
    return () => stopWatchingAuthCallback();
});

const stopWatchingAuthCallback = jest.fn().mockImplementation(() => {
    return null;
});

// Example code
it('getInstruction sets state correctly', () => {
    const wrapper = shallow(<App firebase={firebase} />);
    const getInstruction = jest.spyOn(wrapper.instance(), 'getInstruction');
    expect(getInstruction).toHaveBeenCalledTimes(0);

    const displayType = wrapper.instance().returnDisplayTypes();

    const concept = "abc";
    const instructionType = "def";
    wrapper.instance().getInstruction(concept, instructionType);
    expect(getInstruction).toHaveBeenCalledTimes(1);

    expect(wrapper.state().currentConcept).toBe(concept);
    expect(wrapper.state().instructionType).toBe(instructionType);
    expect(wrapper.state().display).toBe(displayType.instruct);
    expect(wrapper.state().error).toBe(false);

    wrapper.unmount();
});

// misc
wrapper.setState({ a: b });
wrapper.setProps({ a: b });