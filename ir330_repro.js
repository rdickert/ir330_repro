
Router.map(function () {
  this.route('customerList', {
    path: '/customers',
    template: 'customerList',
    data: {customers: [{customerNumber: 10, name: "Ted", amountOwing: 25}]}
  });

  this.route('customerView', {
    path: '/customer/:id',
    template: 'customerView',
    data: {customerNumber: 10, name: "Ted", amountOwing: 25}
  });
});  