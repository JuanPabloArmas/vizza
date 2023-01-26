import React from 'react';
import "./ProgressBar.css"


class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // Simulating progress increase every second
    this.interval = setInterval(() => {
      if (this.state.progress === 100) {
        clearInterval(this.interval);
      } else {
        this.setState({ progress: this.state.progress + 10 });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${this.state.progress}%` }} />
          <div className="icons-container">
            <img src={require('./Interview.png')} className={`icon ${this.state.progress >= 0 ? 'active' : ''}`} alt="Interview" />
            <img src={require('./Interview.png')} className={`icon ${this.state.progress >= 33 ? 'active' : ''}`} alt="Interview" />
            <img src={require('./Interview.png')} className={`icon ${this.state.progress >= 67 ? 'active' : ''}`} alt="Interview" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
