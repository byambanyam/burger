import React, { useState } from "react";

import Burger from "../../components/burger";
import BuildControls from "../../components/buildControls";
import Modal from "../../components/general/Modal";
import OrderSummary from "../../components/Ordersummary";
import Spinner from "../../components/general/spinner";

const BurgerBuilder = (props) => {
  const [confirmOrder, setConfirmOrder] = useState(false);

  const continueOrder = () => {
    closeConfirmModal();
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

  const showConfirmModal = () => {
    setConfirmOrder(true);
  };
  const closeConfirmModal = () => {
    setConfirmOrder(false);
  };

  return (
    <div>
      <Modal closeConfirmModal={closeConfirmModal} show={confirmOrder}>
        <OrderSummary onCancel={closeConfirmModal} onContinue={continueOrder} />
        )
      </Modal>

      <Burger />
      <BuildControls showConfirmModal={showConfirmModal} />
    </div>
  );
};

export default BurgerBuilder;
