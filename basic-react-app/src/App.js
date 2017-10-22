import React from 'react';
import PropTypes from 'prop-types';

// COMPONENT PROPERTIES

// state less function component
// const App = () => <h1>Hi</h1>

// // state component
// class App extends React.Component {
//     render() {
//         // can return only one element
//         return (
//             <div>
//                 <h1>Hello World</h1>
//                 {this.props.txt}
//             </div>
//         )
//         // same as
//         // return React.createElement('h1', props, 'this can be another element, innerHTML or textContent of the element created here')
//     }
// }
//
// App.propTypes = {
//     txt: PropTypes.string,
//     cat: PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//     txt: 'this is the default text'
// }


// STATE
// state is managed and updated by component whereas props are used to as input to component and are not updated by the component
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             txt: 'this is the default text'
//         };
//     }
//
//     update(e) {
//         this.setState({
//             txt: e.target.value
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello World!</h1>
//                 <Widget update={this.update.bind(this)} />
//                 {this.state.txt}
//             </div>
//         );
//     }
// }
//
// const Widget = (prop) => <input type='text' onChange={prop.update} />


// PROPS.CHILDREN

// class App extends React.Component {
//     render() {
//         return (
//             <Button>I <Hearts /> React</Button>
//         )
//     }
// }
//
// const Button = (props) => <button>{props.children}</button>
//
// const Hearts = () => <span>&hearts;</span>




// SYNTHETIC EVENT SYSTEM - VIDEO 9





// REFS - refs are a way to get reference to a node or an instance of an component in application

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            a: '',
            b: ''
        };
        this.update = this.update.bind(this)

    }

    update(e) {
        this.setState({
            a: this.comp.refs.a.value,
            b: this.refs.b.value
        })
    }

    render() {
        return (
            <div>
                <Input update={this.update} ref={component => this.comp = component}/>
                {this.state.a}
                <hr />
                <input type='text' ref='b' onChange={this.update}/>
                {this.state.b}
            </div>
        );
    }
}

class Input extends React.Component {

    render() {
        return <input type='text' ref='a' onChange={this.props.update}/>
    }
}


// REACT COMPONENT LIFECYCLE methods

// 1. componentWillMount
// 2. render - ReactDOM.render('componentToMount', node)
// 3. componentDidMount
// 4. componentWillUnmount - ReactDOM.unmountComponentAtNode(node)
// component update when new props are received
// 5. componentWillReceiveProps
//
// componentWillReceiveProps(nextProps) {
//
// }
//
// 6. shouldComponentUpdate(nextProps, nextState) {
//     return true or false
// }
// if true returned, component will update otherwise no.
//
// 7. componentDidUpdate(prevProps, prevState) {
//
// }

// Iterating over array dataset to create react components - video 14
//
// - when iteration over array dataset to have multiple instance of same react componentn, each component should have a
//     prop 'key' with unique value. Please not key prop is needed for siblings



// - ReactDOM methods
// 1. ReactDOM.findDOMNode(nodeToFind)


export default App
