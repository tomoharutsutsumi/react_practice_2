// let showed = false
// const controllDetails = () => {
//     let button = document.getElementById('button')
//     let text = document.getElementById('text')
//     if (showed) {
//         button.innerText = "Show details"
//         text.innerText = ""
//         showed = false
//     } else {
//         button.innerText = "Hide details"
//         text.innerText = "Hello!"
//         showed = true
//     }
// }

// const root = document.getElementById('app');
// const template = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={controllDetails} id="button">Show details</button>
//         <h2 id="text"></h2>
//     </div>
// )

// ReactDOM.render(template, root)

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            visibility: false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            }
        }) 
    }
    render(){
        return (
            <div>
                <h1>Visibility toogle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <p>hey!</p>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
        
//     );
//     ReactDOM.render(jsx, document.getElementById('app'))
// }

// render();