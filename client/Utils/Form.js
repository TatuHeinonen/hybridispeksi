import React, { Component } from 'react'
import Moment from 'react-moment';

class Text extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    type={this.props.type}
                    autoFocus={this.props.autoFocus}
                    name={this.props.name}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    className="form-control"
                    placeholder={this.props.placeholder}
                    id={this.props.id} />
            </div>
        )
    }
}

class Textarea extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <textarea
                    className="form-control"
                    name={this.props.name}
                    id={this.props.id}
                    rows={this.props.rowd}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}>
                </textarea>
            </div>
        )
    }
}

class Dropdown extends Component {
    render() {
        if (!this.props.options) {
            this.props.options = []
        }
        let options = this.props.options.map((opt, i) => {
            let value = "";
            let time = "";
            if(!opt.value) {
                value = opt._id
            } else {
                value = opt.value
            }
            return (
                <option key={i} value={value}>{opt.name}</option>
            )
        })
        return (
            <div>
                {this.props.label !== 'undefined' && typeof this.props.label !== 'undefined' ? <label htmlFor={this.props.id}>{this.props.label}</label> : ""}
                <select
                    name={this.props.name}
                    onChange={this.props.onChange}
                    value={this.props.selected}
                    className="form-control"
                    id={this.props.id}
                    disabled={this.props.disabled}
                >
                    {options}
                </select>
            </div>
        )
    }
}

/**
 * @param options: label, value
 * @param value
 * @param name
 * @param onChange
 */
class Radio extends Component {
    render() {
        let options = this.props.options.map((option, i) => {
            return (
                <div key={i}>
                        <input 
                            type="radio" 
                            onChange={this.props.onChange} 
                            value={option.value} 
                            checked={option.value == this.props.value} 
                            name={this.props.name} 
                            disabled={this.props.disabled}/> &nbsp;
                        {option.label}
                </div>
            )
        })
        return (
            <div>
                {this.props.legend ? <legend>{this.props.legend}</legend> : ""}
                {options}
            </div>
        )
    }
}

class Checkbox extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

module.exports = {
    Text: Text,
    Textarea: Textarea,
    Dropdown: Dropdown,
    Radio: Radio,
    Checkbox: Checkbox
}