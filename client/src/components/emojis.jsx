import React from "react";
import emojiStyleSheet from "../../twemoji-awesome.css";

class Emojis extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// emojiThought: []
		}
		// this.handleClick = this.handleClick.bind(this)
	}
	// handleClick(e) {
		// e.preventDefault()
		// e.stopPropagation()
		// console.log("+++ value of event in emojis.jsx", e.target.className);
		// let emojiChoice = e.target.className
		// this.setState((prevState) => {
		// 	console.log('+++FILE: emojis.jsx: prevState: ', prevState)
		// 	prevState.emojiThought.push(emojiChoice)
		// })
	// }

  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}><i className={'twa twa-5x twa-alien'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-kissing-heart'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-dash'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-eggplant'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-thumbsup'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-bathtub'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-ram'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-trophy'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-rice-cracker'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-hamburger'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-rooster'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-ram'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-dancer'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-wave'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-speech-balloon'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-pouting-cat'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-sweat'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-trophy'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-smile'}></i></button>
				<button onClick={this.props.handleClick}><i className={'twa twa-5x twa-v'}></i></button>
      </div>
    );
  }
}

export default Emojis;
