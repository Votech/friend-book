import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleHeaderDropdownSettings, toggleNotifications, } from '../../redux/user-interface/user-interface.actions';

/**
 * Component that alerts if you click outside of it
 */
 class OutsideListener extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.action()
    }
  }

  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

OutsideListener.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    toggleHeaderDropdownSettings: () => dispatch(toggleHeaderDropdownSettings()),
    toggleNotifications: () => dispatch(toggleNotifications()),
  });

export default connect(null, mapDispatchToProps)(OutsideListener);