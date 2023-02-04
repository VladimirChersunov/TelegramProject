import React from 'react';

class GptInput extends React.Component {
  constructor(){
    super();
    this.state = {
      textareaHeight: 'auto'
    }
    this.onChange = this.onChange.bind(this);
  }
 
  onChange(event){
    const element = event.target;
    this.setState({
      textareaHeight: element.scrollHeight + 'px'
    });
  }
 
  render(){
    return(
      <div>
        <div style={{height: this.state.textareaHeight}}>
          <textarea
            onChange={this.onChange}
            style={{height: this.state.textareaHeight}}
          />
        </div>
      </div>
    )
  }
}

export default GptInput;
