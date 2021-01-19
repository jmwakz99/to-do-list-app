import React from 'react'
import ListItem from './components/ui/ListItem'

class App extends React.Component {

  componentDidMount() {
    // window.$('.ui.search')
    //   .search({
    //     source: 'Test'
    //   })
    //   ;

  }
  render() {
    return (
      <div className="App">
        <ListItem></ListItem>

      </div>
    );

  }

}

export default App;
