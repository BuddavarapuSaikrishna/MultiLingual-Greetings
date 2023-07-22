import {Component} from 'react'
import TabItem from './components/TabItem'
import GreetingsList from './components/GreetingsList'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here

class App extends Component {
  state = {TabId: languageGreetingsList[0].id}

  UpdateTabId = tabvalue => {
    this.setState({TabId: tabvalue})
  }

  getGreetings = () => {
    const {TabId} = this.state

    const filteredResults = languageGreetingsList.filter(
      eachItem => eachItem.id === TabId,
    )
    return filteredResults
  }

  render() {
    const {TabId} = this.state

    const filterResults = this.getGreetings()

    console.log(TabId)
    console.log(filterResults)
    return (
      <div className="Main-Container">
        <h1>Multilingual Greetings</h1>
        <ul className="TabList-Container">
          {languageGreetingsList.map(eachItem => (
            <TabItem
              TabDetails={eachItem}
              ChangeTabId={this.UpdateTabId}
              key={eachItem.id}
              isActive={eachItem.id === TabId}
            />
          ))}
        </ul>

        <ul className="GreetingsList-Container">
          {filterResults.map(eachGreeting => (
            <GreetingsList
              GreetingsDetails={eachGreeting}
              key={eachGreeting.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
