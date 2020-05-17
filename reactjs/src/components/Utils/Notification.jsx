import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { pushNotification, hideNotification } from '../../redux/actions/notifyActions';

import { Alert } from 'reactstrap';

class Notification extends Component {
  state = { isOpen: false }

  static alert(title, message, type) {
    const notification = {
      title: title,
      message: message,
      type: "alert-default",
    };

    switch (type) {
      case "alert-default":
      case "primary":
      case "secondary":
      case "info":
      case "success":
      case "danger":
      case "warning":
        notification.type = type;
        break;

      default:
        break;
    }
    store.dispatch(pushNotification(notification));
    window.setTimeout(() => {
      store.dispatch(hideNotification());
    }, 5000);
  }

  render() {
    return (
      <Alert
        color={this.props.notificator.notification.type}
        isOpen={this.props.notificator.isOpen}
        className="position-fixed bottom-1 right-4"
      >
        <strong>{this.props.notificator.notification.title}! </strong>
        {this.props.notificator.notification.message}
      </Alert>
    );
  }
}

const mapStateToProps = (state) => ({
  notificator: state.notificator,
})

export default connect(mapStateToProps, null)(Notification);