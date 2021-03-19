import React from 'react';
import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout'; 

  const StripeCheckoutButton = ({price}) => {
      const priceForStripe = price * 100;
      const publishableKey = 'pk_test_51IWhv4G7ugxLrkCWr7JnzX2fObDfwrm67pKQMMFTGHDXsrgjMMieMzMLkNcr5SpShaUWV6KKf65lQu3ZkypvKEVB00iqJY5QxI';

      const onToken = token => {
            console.log(token);
            alert('Payment Successful');
        }

      return(
          <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
          />
      );
  }

  export default StripeCheckoutButton;