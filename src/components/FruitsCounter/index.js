// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}

  eatBanana = () => {
    this.setState(prevState => ({
      banana: prevState.banana + 1,
    }))
  }

  eatMango = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruits">
          <h1>
            Bob ate <span className="fruit">{mango}</span> mangoes{' '}
            <span className="fruit">{banana}</span> bananas
          </h1>

          <div className="f">
            <div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                  className="image"
                />
              </div>
              <button type="button" className="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                  className="image"
                />
              </div>
              <button type="button" className="button" onClick={this.eatBanana}>
                Eat Bananas
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
