import React, {Component} from 'react';

export default class Komentar extends Component {
    state = {
        obrisano: false
    }
    obrisi = () => {
        this.setstate({
            obrisano: true
        })   
    }
    render() {
        if (this.state.obrisano) return null;
        return (
            <p>
                {this.props.ime}: {this.props.utisak}
                <button onClick={this.obrisi}>x</button>
            </p>
        )
    }
}