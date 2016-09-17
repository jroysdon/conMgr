import React, { Component, PropTypes } from 'react'
import PureInput from '../components/PureInput'


const divLegendStyle = {
  textAlign: 'center !important'
};

class Address extends Component {
  shouldComponentUpdate(nextProps) {
    return
      //this.props.vName !== nextProps.vName ||
      // this.props.street !== nextProps.street ||
      // this.props.city !== nextProps.city ||
      // this.props.state !== nextProps.state ||
      // this.props.zipcode !== nextProps.zipcode ||
      this.props.phones !== nextProps.phones
  }

  render() {
    const { vName, street, city, state, zipcode, phones } = this.props
    return (<div>
        <div>
          <label className="col-xs-4 control-label">Name</label>
          <div className="col-xs-8">
            <PureInput className="form-control" type="text" placeholder="Name" field={vName} title={vName.error}/>
          </div>
        </div>
        <div>
          <label className="col-xs-4 control-label">Street</label>
          <div className="col-xs-8">
            <PureInput className="form-control" type="text" placeholder="Street" field={street} title={street.error}/>
          </div>
        </div>
        <div>
          <label className="col-xs-4 control-label">City</label>
          <div className="col-xs-8">
            <PureInput className="form-control" type="text" placeholder="City" field={city} title={city.error}/>
          </div>
        </div>
        <div>
          <label className="col-xs-4 control-label">State</label>
          <div className="col-xs-8">
            <PureInput className="form-control" type="text" placeholder="State" field={state} title={state.error}/>
          </div>
        </div>
        <div>
          <label className="col-xs-4 control-label">Zip</label>
          <div className="col-xs-8">
            <PureInput className="form-control" type="number" placeholder="Zip" field={zipcode} title={zipcode.error}/>
          </div>
        </div>

        <div style={divLegendStyle}>
         <button className="btn btn-success" type="button" onClick={event => {
           event.preventDefault()  // prevent form submission
           phones.addField()       // pushes empty phone field onto the end of the array
         }}><i className="fa fa-phone"></i> Add Phone
         </button>
       </div>
         {phones.map((phone, index) =>
           <div key={index}>
             <label className="col-xs-4 control-label">Phone #{index + 1}</label>
             <div className="col-xs-8">
               <PureInput className="form-control" type="text" placeholder="Phone" field={phone} title={phone.error}/>
             </div>
           </div>
         )}
        </div>
        )
      }
}

Address.propTypes = {
vName: PropTypes.object.isRequired,
street: PropTypes.object.isRequired,
city: PropTypes.object.isRequired,
state: PropTypes.object.isRequired,
zipcode: PropTypes.object.isRequired,
phones: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Address
