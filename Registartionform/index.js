// Write your JS code here

import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state
    return firstNameInput.trim() !== ''
  }

  validateLastName = () => {
    const {lastNameInput} = this.state
    return lastNameInput.trim() !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({
      showFirstNameError: !isValidFirstName,
    })
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({
      showLastNameError: !isValidLastName,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()

    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    this.setState({
      showFirstNameError: !isValidFirstName,
      showLastNameError: !isValidLastName,
    })

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({
      isFormSubmitted: false,
      firstNameInput: '',
      lastNameInput: '',
      showFirstNameError: false,
      showLastNameError: false,
    })
  }

  renderFirstNameField = () => {
    const {firstNameInput, showFirstNameError} = this.state

    const className = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstNameInput}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {showFirstNameError && <p className="error-message">Required</p>}
      </div>
    )
  }

  renderLastNameField = () => {
    const {lastNameInput, showLastNameError} = this.state

    const className = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={className}
          value={lastNameInput}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {showLastNameError && <p className="error-message">Required</p>}
      </div>
    )
  }

  renderRegistrationForm = () => (
    <form className="form-container" onSubmit={this.onSubmitForm}>
      {this.renderFirstNameField()}
      {this.renderLastNameField()}

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  )

  renderSubmissionSuccessView = () => (
    <div className="submit-success-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="success-message">Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>

        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
