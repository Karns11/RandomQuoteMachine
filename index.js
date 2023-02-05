class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            text: ["Genius is one percent inspiration and ninety-nine percent perspiration.", "You can observe a lot just by watching.", "A house divided against itself cannot stand.", "Difficulties increase the nearer we get to the goal.", "Fate is in your hands and no one elses", "Be the chief but never the lord.", "Nothing happens unless first we dream.", "Well begun is half done.", "Life is a learning experience, only if you learn.", "Self-complacency is fatal to progress.", "Peace comes from within. Do not seek it without.", "What you give is what you get.", "We can only learn to love by loving.", "Life is change. Growth is optional. Choose wisely.", "You'll see it when you believe it."],
            author: ["Thomas Edison", "Yogi Berra", "Abraham Lincoln", "Johann Wolfgang von Goethe", "Byron Pulsifer", "Lao Tzu", "Carl Sandburg", "Aristotle", "Yogi Berra", "Margaret Sangster", "Buddha", "Byron Pulsifer", "Iris Murdoch", "Karen Clark", "Wayne Dyer"],
            color: '#111'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const colors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FF5722", "#795548", "#607D8B", "#9E9E9E", "#00796B", "#827717", "#3E2723", "#004D40", "#1B5E20", "#33691E", "#8D6E63", "#F57C00"];
        this.setState({
            count: Math.floor(Math.random() * this.state.author.length),
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
    render() {
        return (
            <div style={{backgroundColor: this.state.color, minHeight: '100vh'}}>
                <div className='container pt-5'>
                    <div className='jumbotron'>
                        <h1 id='text' className='ml-3'>"{this.state.text[this.state.count]}</h1>
                        <p id='author' className='ml-3'>- {this.state.author[this.state.count]}</p>
                        <button id='new-quote' className=' btn btn-primary ml-3' onClick={this.handleClick}>New Quote</button>
                        <a id='tweet-quote' href='twitter.com/intent/tweet' target='_blank' className='btn btn-warning ml-3'>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('quote-box'))