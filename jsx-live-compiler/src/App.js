import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '/* add your jsx here */',
            error: '',
            output: 'output'
        };
        this.update = this.update.bind(this);
    }

    update(e) {
        let code = e.target.value;
        try {
          this.setState({
            output: window.Babel
            .transform(code, { presets: ['es2015', 'react']})
            .code,
            error: ''
          })
        }
        catch(err){
          this.setState({error: err.message})
        }
    }

    render() {
        return (
            <div>
                <header>{this.state.error}</header>
                <div className='container'>
                    <textarea onChange={this.update} defaultValue={this.state.input}></textarea>
                    <pre id='output'>{this.state.output}</pre>
                </div>
            </div>
        );
    }
}

export default App;
