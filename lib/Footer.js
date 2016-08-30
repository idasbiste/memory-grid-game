/* global React */

class Footer extends React.Component {
    
    remainingCount() {
        if (this.props.gameState !== 'recall') {
            return null;
        }
        return (
            <div className="remaining-count">
                { this.props.activeCellCounts - this.props.correctGuesses.length }
            </div>
        );
    }
    
    render() {
        return (
            <div className="footer">
                <div className="hint">
                    { this.props.hints[this.props.gameState] }...
                </div>
                { this.remainingCount() }
            </div>
        );
    }
}

Footer.defaultProps = {
    hints: {
        ready: "Get Ready",
        memorize: "Memorize",
        recall: "Recall"
    }
};

export default Footer;