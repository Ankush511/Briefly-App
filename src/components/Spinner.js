import React, { Component } from 'react'
import SpinLoading from './SpinLoading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={SpinLoading} alt="spinloading" />
      </div>
    )
  }
}
