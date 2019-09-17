class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            console.log(json)
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({ options }))
                console.log(options)
                console.log({options})
            }
        }
        catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
         if (prevState.options.length !==  this.state.options.length) {
             console.log()
            const json = JSON.stringify(this.state.options);
            // console.log(this.state.options)
            // console.log(json)
            localStorage.setItem('options', json)
            console.log(" component did update")
         }
        
    }
    componentWillUnmount() {
        console.log("component will unmount")
    }
    handleDeleteOptions(){
        this.setState(() => ({ options: []}))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(option);
    }
    handleAddOption(option) {
        if(!option) {
            return "Enter valid value to add item"
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists'
        }
        this.setState((prevState) => ({options: prevState.options.concat([option])}))
    }
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOption={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                  options={this.state.options}
                  handleDeleteOptions={this.handleDeleteOptions}
                  handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

// class Header extends React.Component {
//     render() {
        
//     }
// }


const Header = (props) => {
    return(
        <div>
            <div>test text</div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOption}
            >
                what should I do?
            </button>
        </div>
    );
}
// class Action extends React.Component{
//     render() {
        
//     }
// }

// class Options extends React.Component{
//     render() {
        
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please adda an option</p>}
            {
                props.options.map((option, i) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

// class Option extends React.Component{
//     render(){
        
//     }
// }

const Option = (props) => {
    return (
        <div>
           {props.optionText}
           <button 
             onClick={(e) => {
                 props.handleDeleteOption(props.optionText)
             }}
           >
             remove
           </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        console.log("here?")
        e.preventDefault()
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
        // this.setState(() => {
        //     return { error }
        // })
         // this.setState(() => {{ error }})
        this.setState(() => ({error}))

        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>post</button>
                </form>
            </div>
        );
    }
}


// const User = (props) => {
//     return (
//         <div>
//            <p>Name: {props.name} </p>
//            <p>Age: {props.age} </p> 
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));