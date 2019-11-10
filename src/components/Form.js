import React from 'react';

export default  class Form extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: '' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  this.handleEmail = this.handleEmail.bind(this);
  }

  render() {
	return (
  	<form style={{color:"white"}} className="test-mailing">
{/*    	<h3 >Write me a message</h3>*/}
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Write me a message"
        	required
        	value={this.state.feedback}
        	style={{width: '60%', height: '100px'}}
      	/>
    	
      <textarea
          id="test-mailing"
          name="test-mailing"
          onChange={this.handleEmail}
          placeholder="email@example.com"
          required
          value={this.state.email}
          style={{width: '45%', height: '20px'}}
        />
      </div>
    	<input style={{marginLeft:"10px"}} type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }
  handleEmail(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit (event) {
	const templateId = 'template_6XVOGV6x';

	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.email, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
      this.setState({
         feedback: '', name: 'Name', email: '' 
      })
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}
