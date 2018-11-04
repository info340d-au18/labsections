Without dep injection: In order for you to test it, you would have to make a call to a real url every single time you wanted to test this function. Imagine if foo() was larger, and had a million functionalities that you wanted to test. Obviously not ideal. Something to do instead is to actually pass in actual fetch to the function as a parameter:

With dep injection: (In reality, doSomething() should be dependency injected too). Doing something like this, you can now do what is called "mocking" a function during a test. You can pass in a function that will always return something, will return a random thing, return different things on the first call and second call, count calls to the function, see parameters and return values of the function. https://jestjs.io/docs/en/mock-functions

What does it look like in practice?

Well, I mocked the firebase package in App.js in App.test.js, because I didn't want to make real firebase calls every single time the App was mounted/initialized.

What I did was:

Why this mess of chains? Well, I wanted it to be verbose so that we can see exactly what a function returns and where the chains are. In this case, calling firebase.auth().onAuthStateChanged() returns a function that when called, will return null (the real implementation just stops the authentication listener). When I made the function using jest.fn().mockImplementation(() => {}), I can now do a whole bunch of data grabbing from it. For example, I can write a test like this:

it(): it is part of the jest package. Notice how we didn't have to import any jest packages at the beginning of our file. This is because it is automatically invoked when we call the jest command in the terminal. getInstruction sets state correctly is the title of the test, that will appear nicely when we call the test, and give us a nice checkmark or x by it if it passes or fails. The callback function it calls will be our own defined function.

shallow and mount: We plug in the React component like we would in a regular React app. We can pass it props normally as well. In this case, I pass in my fake firebase that I showed earlier. Mount will mount the app in the wrapper object. This will let us call commands on it, or keep track of things. The Enzyme documentation really helps you learn about what you can do with this. shallow will only mount a 'shallow' copy, and I don't think it mounts the children. I believe it doesn't call the componentDidMount() function either. mount (in the place of shallow) will mount an actual copy, and as such, will take longer during the test. (shallow tests are around ~5ms, mount tests are around ~60ms)

jest.spyOn(), wrapper.instance(): Wrapper.instance() basically gives you an instance of the object. You can grab functions from it, and that's what we're doing in this case. spyOn stores a spy on the function in App.js called 'getInstruction' which allows me to later count calls using

expect: How many times the function has been invoked

wrapper.state: You can use wrapper.state() to get the state of the app. It also works like wrapper.state('currentConcept') for only a single state if you want. expect(x).toBe(y) is what jest uses to test if your actual equals the expected.

unmount: Unmount the wrapper to not use any unecessary memory.

setstate/props: You can also use things like wrapper.setState({a: b}) or wrapper.setProps({a: b}) to invoke the component's render() method or componentWillReceiveProps() method.