import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

// Date Picker from https://hacker0x01.github.io/react-datepicker/
var DatePicker = require('react-datepicker');
var moment = require('moment');
import PureInput from '../components/PureInput'

export const fields = [
  'conName',
  'startDate',
  'endDate'
]

const validate = values => {
  const errors = {}
  // if (!values.firstName) {
  //   errors.firstName = 'Required'
  // } else if (values.firstName.length > 15) {
  //   errors.firstName = 'Must be 15 characters or less'
  // }
  // if (!values.lastName) {
  //   errors.lastName = 'Required'
  // } else if (values.lastName.length > 15) {
  //   errors.lastName = 'Must be 15 characters or less'
  // }
  return errors
}

const divButtonStyle = {
  textAlign: 'center',
  margin: '10px'
}

const divLegendStyle = {
  textAlign: 'center !important'
}

class ConWiz1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
    };
  }

  render() {
    const {
      addValue,
      fields: { conName, startDate , endDate},
      handleSubmit,
      resetForm,
      invalid,
      submitting
    } = this.props

    return (<form onSubmit={handleSubmit}>

      <label className="col-xs-2 control-label"> Convention Name</label>
      <div className="col-xs-10">
        <PureInput className="form-control" type="text" placeholder="Name" field={conName} title={conName.error}/>
      </div>
        <div><p></p></div>
        <div style={divLegendStyle}>
        Start Date:
        <DatePicker
            selected={this.state.startDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart} />
          End Date:
        <DatePicker
            selected={this.state.endDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd} />
        </div>
        <div>
          <button type="submit">
            Next <i/>
          </button>
        </div>
      </form>
    )
  }
}

ConWiz1.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'wizard',              // <------ same form name
  fields,                      // <------ only fields on this page
  destroyOnUnmount: false,     // <------ preserve form data
  validate                     // <------ only validates the fields on this page
})(ConWiz1)
