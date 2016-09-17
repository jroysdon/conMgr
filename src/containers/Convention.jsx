import React, { Component, PropTypes } from 'react'
import { reduxForm, addArrayValue } from 'redux-form'

// Date Picker from https://hacker0x01.github.io/react-datepicker/
var DatePicker = require('react-datepicker');
var moment = require('moment');

//require('react-datepicker/dist/react-datepicker.css');

import Address from './Address'
import PureInput from '../components/PureInput'
import validate from './validateConvention'
export const fields = [
  'conName',
  'startDate',
  'endDate',
  'shipping.vName',
  'shipping.street',
  'shipping.city',
  'shipping.state',
  'shipping.zipcode',
  'shipping.phones[]',
  'billing.vName',
  'billing.street',
  'billing.city',
  'billing.state',
  'billing.zipcode',
  'billing.phones[]',
  'children[].name',
  'children[].age',
  'children[].awards[]'
]

const divButtonStyle = {
  textAlign: 'center',
  margin: '10px'
};

const divLegendStyle = {
  textAlign: 'center !important'
};

class Convention extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
    };
  }

  handleChangeStart = (date) => {
    // debugger;
    this.setState({
      startDate: date
    });
  }
  handleChangeEnd = (date) => {
    // debugger;
    this.setState({
      endDate: date
    });
  }
  render() {
    const {
      addValue,
      fields: { conName, startDate , endDate, shipping, billing, children },
      handleSubmit,
      resetForm,
      invalid,
      submitting
    } = this.props
    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>

        <div>
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
        </div>
        <div className="row">
          <fieldset className="col-xs-12 col-sm-6">
            <legend style={divLegendStyle}>Convention Venue</legend>
            <Address {...shipping}/>
          </fieldset>
          <fieldset className="col-xs-12 col-sm-6">
            <legend style={divLegendStyle}>Convention Billing Address</legend>
            <Address {...billing}/>
          </fieldset>
        </div>
        <div style={divButtonStyle}>
          <button type="button" onClick={() => {
            children.addField()    // pushes empty child field onto the end of the array
          }}><i/> Add Child
          </button>
          <button type="button" onClick={() => {
            children.addField({     // pushes child field with initial values onto the end of the array
              name: 'Bobby Tables',
              age: 13,
              awards: [ 'Input Sanitation', 'Best XKCD Meme' ]
            })
          }}><i/> Add Bobby
          </button>
        </div>
        {!children.length && <div>No Children</div>}
        {children.map((child, index) => <div key={index}>
          <div>
            <label>Child #{index + 1}</label>
            <div>
              <PureInput type="text" placeholder="Child Name" field={child.name}/>
            </div>
            <div>
              <PureInput type="text" placeholder="Child Age" field={child.age}/>
            </div>
            <div>
              <button type="button" onClick={() => {
                child.awards.addField()  // pushes empty award field onto the end of the array
              }}><i/> Add Award
              </button>
              <div>
                <button type="button" disabled={index === 0} onClick={() => {
                  children.swapFields(index, index - 1)  // swap field with it's predecessor
                }}><i/>
                </button>
                <button type="button" disabled={index === children.length - 1} onClick={() => {
                  children.swapFields(index, index + 1)  // swap field with it's successor
                }}><i/>
                </button>
              </div>
              <button type="button" onClick={() => {
                children.removeField(index)  // remove from index
              }}><i/> Remove
              </button>
            </div>
          </div>
          {child.awards.map((award, awardIndex) => <div key={awardIndex}>
            <div>
              <label>Award #{awardIndex + 1}</label>
              <div>
                <PureInput type="text" placeholder="Award" field={award}/>
              </div>
              <div>
                <button type="button" onClick={() => {
                  child.awards.removeField(awardIndex) // remove from awardIndex
                }}><i/></button>
              </div>
            </div>
          </div>)}
        </div>)}
        <div className="text-center">
          <button className="btn btn-primary btn-lg" type="submit" disabled={submitting || invalid}>
            {submitting ? <i className="fa fa-cog fa-spin"/> : <i className="fa fa-paper-plane"/>} Submit
          </button>
          <button className="btn btn-default btn-lg" type="button"
            disabled={submitting} onClick={resetForm}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
}

Convention.propTypes = {
  addValue: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'Convention',
  fields,
  validate
}, undefined, {
  addValue: addArrayValue // mapDispatchToProps (will bind action creator to dispatch)
})(Convention)
