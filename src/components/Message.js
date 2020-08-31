import React from 'react';
// import logo from '../logo.svg';

import './Message.css';

class Message extends React.Component {
    constructor() {
        super();

        this.state = {
            isLiked: false,
            counter: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('Я собрался');
    }

    componentWillUnmount() {
        console.log('Я буду разбираться');
    }

    handleClick() {
        const { isLiked, counter } = this.state;
        this.setState({ isLiked: !isLiked, counter: counter + 1 });
    }

    render() {
        const { name, logo, title, text } = this.props;
        const { isLiked, counter } = this.state;
        const date = new Date();
        const displayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        const btnClassName = `message-header-button ${isLiked ? 'message-header-button_active' : ''}`;
        return (
            <div className="message" >
                <div className="message-header">
                    <img src={logo} className="message-header-image" alt="logo" />
                    <div className="message-header-text_block">
                        <p className="message-header-title">{name}</p>
                        <p className="message-header-date">{displayDate}</p></div>

                </div>
                <button
                    className={btnClassName}
                    onClick={this.handleClick}
                />

                <span className="message-header-counter">{counter}</span>

                <div className="message-body">
                    <h2 className="message-body-title">{title}</h2>
                    <p className="message-body-content">{text}</p>

                </div>
            </div>
        );
    }

}

export default Message;

// function Message(props) {
//     const { name, logo, title, text } = props;
//     const date = new Date();
//     const displayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
//     return (
//         <div className="message">
//             <div className="message-header">
//                 <img src={logo} className="message-header-image" alt="logo" />
//                 <div className="message-header-text_block">
//                     <p className="message-header-title">{name}</p>
//                     <p className="message-header-date">{displayDate}</p></div>
//             </div>
//             <div className="message-body">
//                 <h2 className="message-body-title">{title}</h2>
//                 <p className="message-body-content">{text}</p>

//             </div>
//         </div>
//     );
// }

// export default Message;
