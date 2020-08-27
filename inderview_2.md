HTML
    document structure
    semantic markup (SEO, accessability)
    aria, role attributes
    how to add styles to the page (link attribute rel="stylesheet" href=, style tag)
    async/defer https://javascript.info/script-async-defer
    web components shadow dom (scoped subtree prevent css collision)
    DOM (how to access element) querySelector => NodeList
    svg(how can you style svg) vs canvas
    iframe
        how communication occurs?

CSS
    how to create print stylesheet
    box-model (Width and height or content, Padding, border) - 
    box-sizing (border-box)
    positioning (static, relative, absolute, fixed, sticky)
    margin-collapsing
    css units em (%,px,vm,vh,vmin,vmax, rem, em)
    style element if it has no siblings (:only-child, :first-child:last-child)
    selectors ( combinators( , >, *, +, ~,) ., #)
           - calc
    center element vertically and horizontally
    css preprocessors (sass, less, stylus)
    postCss
    sprites (multiple images combined into one)
    what tool do you use for cross-browser testing (caniuse?)
    transition: <property> <duration> <timing-function> <delay>;
    transforms: matrix, translate, scale, rotate, skew

    layout
        floats - what for
        table layout?
        css grid ()
            grid-template-column
            grid-template-rows
                display: grid;
                    place-items: center;
            grid-template-rows: auto 1fr auto;

        flexbox
            justify-content
            align-items
            flex-grow 
            flex-shrink
            flex-direction

JS
    primitive values (undefined, boolean, number, string, bigint, symbol, null)
    how is it possible that we can invoke method on primitive value 'hi'.toUpperCase()
    let, const - block scope, tdz, const obj = {a: 10} obj.a = 11
    iterate over object properties (Object.keys, for in)
    reference vs primitive {a: 10} === {a: 10}
    bubbling (event.target element that initiated the event, it doesn’t change through the bubbling process.) event.currentTarget
       to stop event.stopPropagation
       event delegation
    arrow function vs regular
        lexical this
        argument
        implicit return
        without new
    higher order function
    pure function
    which type of inheritance is in javascript
    super
    prototypes
        Object.create
        Object.setPrototypeOf
        function constructors with new
    bind/call/apply
        bind to do partial application
    Promises
        Promise.all race resolve
        how to handle errors
        async/await try catch to handle errors
    Macro/micro tasks
    debounce/throttle
    

Web services
    Ajax
    fetch API
        The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500
            Instead, it will resolve normally (with ok status set to false
    HTTP methods
    long polling/polling
    websockets
    CORS (how to avoid JSONP, proxy server) Access-Control-Allow-Origin:
    JSON/XML
    WebWorker/ServiceWorker

Mobile/Desktop Development
    Native/hybrid/web
    react native
    flutter
    Electron

Frameworks Common
    -one/two way databinding
    SPA
    web components

React 
    JSX
        (produces React “elements”)
        After compilation, JSX expressions become regular JavaScript objects.
    ReactDOM vs React
    Which value should use for key attribute in list’s item
    refs (how to get dom element)
    PropTypes
    controlled components
    HOC
    Render Prop
    fundamental principles of redux
        single source of truth
        state is read-only
        change are made with pure functions
    components of Redux
        action
            object describes what happened in our app
        reducer
            specify how the application’s state changes in response to actions sent to the store
        store
    What is Redux Thunk used for?
        Redux thunk is middleware that allows us to write action creators that return a function instead of an action
    PureComponent
        When props or state changes, PureComponent will do a shallow comparison on both
        handles the shouldComponentUpdate method for us
    Lazy loading of react components React.lazy/Suspense
    memoization
    setState async/sync
        does not immediately mutate this.state but creates a pending state transition. 
        Accessing this.state after calling this method can potentially return the existing value.
    Context(Provider, consumer), reduxProvider
    Component lifecycle
        componentDidMount
        componentDidUpdate
        componentWillUnmount

Data
    localstorage/sessionstorage
    IndexedDB for large amount of data
    Set-Cookie backend
        Secure attribute  is sent to the server only with an encrypted request over the HTTPS protocol,
        HttpOnly attribute is inaccessible to the JavaScript document.cookie
        SameSite: strict lax
        third party cookies (tracking cookies)
    MongoDB vs SQL

Design/Architecture
    OOP principles
        composition/inheritance
    MVC
    SOLID
        Single Responsibility Principle
            A class should have one and only one reason to change, meaning that a class should only have one job.
        Open Closed
            Open for extension means that we should be able to add new features or components to the application without breaking existing code.
        Liskov
            All this is stating is that every subclass/derived class should be substitutable for their base/parent class.
        Interface segregation
            A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.
        Dependency Inversion
            high level module must not depend on the low level module, but they should depend on abstractions.

    DRY code

    Design patterns
        3 types (structual, behavioral, creational)
        Singleton
        Adapter
        Composite
        Decorator
        Mediator
        Proxy
        Facade
    Big O complexity
    Algorithms
        binary tree
        search in sorted array
        data structures
            Queues
            Stacks

Security
- XSS, XSRF, sanitize

Testing Approaches
- What is unit tests
- Other types? integration, functional (e2e)
- TDD vs BDD

CI/CD
    git
        clone/push/pull/commit/fetch/cherry-pick/stash/rebase
    npm/yarn
        what for?
        devDependencies
        scripts section
        semver
        webpack
        babel
        npm audit
        webpack
        package.lock/yarn.lock should be commited?
    what did you use gulp for (streams)
    jenkins/teamcity

Security
    Authentication(who are you) / authorization (what can you do)
    XSS, SQL injections
    Sanitization
    jwt token

Cloud
    which cloud platform have you used?
    IaaS DigitalOcean, AWS
    PaaS Heroku
    SaaS Dropbox, Gmail

Code Quality
    code smells
    tech debt
    debugging
        Network panel
        Source panel
        extension (React dev tools)
        console.table
        console.group
    testing
        coverage
        unit testing jest
        it/test expect mock
    best practices
        eslint/prettier
        refactoring

Processes
    part of sprint (planing, grooming, retro, standups) estimaiton

React and Vue.js. why you used two frameworks/libraries?

What do you like most about your job?
What are pros and cons of redux-thunk, redux-saga. When do you recommend using one over the other?
Compare REST and GraphQl. Pros and cons
How do you go about optimizing applications for maximum speed?

What is your best ES6 feature?

// closure

<script>
function initCounter(initValue) {
  // you code here
}

const count1 = initCounter(5);
console.log(count1()); // 6
console.log(count1()); // 7

const count2 = initCounter(100);
console.log(count2()); // 101
console.log(count2()); // 102
</script>

// utility method from lodash

<script>


chunk([1, 2, 3, 4], 2)           // [[1, 2], [3, 4]]
chunk([1, 2, 3, 4])              // [[1], [2], [3], [4]]
chunk(['a', 'b', 'c', 'd'], 3)   // [['a', 'b', 'c'], ['d']]
</script>

https://syncfiddle.net/
https://coderpad.io