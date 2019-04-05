import React, { Component } from 'react';
import Header from './header'
import List from './elements/list/list'

class App extends Component {
  state = {
    task: "",
    list: []
  }
  
  updateTask = (e) => {
    
    this.setState({
      task: e.target.value
    })

    if (e.key === 'Enter') {
      this.addTaskToList()
    }
  }

  addTaskToList = () => {

    if (this.state.task) {
      let newList = this.state.list
    
      newList.push({
        task: this.state.task,
        completed: false
      })
      
      this.setState({
        list: newList,
        task: ''
      })
    }  
    console.log(this.state.list);
    
  }

  removeItemFromList = (index) => {
    let newList = this.state.list

    newList.splice(index, 1)

    this.setState({
      list: newList
    })
  }

  markTaskCompleted = (index) => {
    let newList = this.state.list

    newList[index].completed = !newList[index].completed
    this.setState({
      list: newList
    })
  }
  render() {
    return (
      <div className='container'>
        
        <Header
          inputHandler={this.updateTask}
          taskValue={this.state.task}
          clickHandler={this.addTaskToList}
        />
        <List 
          listItems={this.state.list}
          removeItemFromList={this.removeItemFromList}
          markTaskCompleted={this.markTaskCompleted}
        />
      </div>
    );
  }
}

export default App;
