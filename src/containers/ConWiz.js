import React, { Component, PropTypes } from 'react'
import ConWiz1 from './ConWiz1'
import ConWiz2 from './ConWiz2'
import ConWiz3 from './ConWiz3'

class ConWiz extends Component {
  constructor(props) {
    super(props)

    // Pro tip: The best place to bind your member functions is in the component constructor
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
        {page === 1 && <ConWiz1 onSubmit={this.nextPage}/>}
        {page === 2 && <ConWiz2 previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <ConWiz3 previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    )
  }
}

ConWiz.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ConWiz
