Meteor.startup(function() {
  let util = require('util');
  let braintree = require('braintree');

  console.log(braintree);
})


// var gateway = braintree.connect({
//   environment: braintree.Environment.Sandbox,
//   merchantId: Meteor.settings.public.braintree.merchantId,
//   publicKey: Meteor.settings.public.braintree.publicKey,
//   privateKey: Meteor.settings.private.braintree.privateKey
// });

// gateway.transaction.sale({
//   amount: '5.00',
//   paymentMethodNonce: "nonce-from-the-client",
//   options: {
//   submitForSettlement: true
//   }
// },
// function(err, result) {
//   if (result) {
//     if (result.success) {
//       console.log("Transaction ID: " + result.transaction.id)
//     } else {
//       console.log(result.message)
//     }
//   } else {
//     console.log(err)
//   }
// });
