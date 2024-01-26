import React, { Component } from "react";

import Burger from "../../components/burger";
import BuildControls from "../../components/buildControls";
import Modal from "../../components/general/Modal";
import OrderSummary from "../../components/Ordersummary";
import Spinner from "../../components/general/spinner";

class BurgerBuilder extends React.Component {
  state = {
    confirmOrder: false,
  };

  componentDidMount = () => {};
  continueOrder = () => {
    this.closeConfirmModal();
  };

  // query = () => {
  //   const params = [];
  //   for (let Orts in this.props.burgeriinOrts) {
  //     params.push(Orts + "=" + this.props.burgeriinOrts[Orts]);
  //   }
  //   params.push("dun=" + this.props.niitUne);
  //   const query = params.join("&");
  //   return query;
  // };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              query={this.query}
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
            />
          )}
        </Modal>

        <Burger />
        <BuildControls showConfirmModal={this.showConfirmModal} />
      </div>
    );
  }
}

export default BurgerBuilder;
