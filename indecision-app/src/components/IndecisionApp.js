import React from 'react';
import AddOption from './AddOption.js';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
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
    handleDeleteOptions = () => {
        this.setState(() => ({ options: []}))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handleDeleteSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined}))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        this.setState(() => ({selectedOption: option}))
    }
    handleAddOption = (option) => {
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
                <div className="container">
                    <Action 
                        hasOption={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                    <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption 
                        handleAddOption={this.handleAddOption}
                    />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleDeleteSelectedOption={this.handleDeleteSelectedOption}
                />
            </div>
        )
    }
}

export default IndecisionApp