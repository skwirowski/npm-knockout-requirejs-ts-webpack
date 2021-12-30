import * as ko from 'knockout';

// * Observables are JavaScript functions
// * Internally Knockout's bindings observe the observables

// read a value
const name = viewModel.name();
// write a value
viewModel.name('Steve');

// * Three types of observables
// * 1. Observable - used for view model properties
// * 2. Observable arrays - used for collections
// * 3. Dependent (Computed) observables - encapsulate one or more other obesrvables

// *3. Computed observables
const displayModel = {
  firstName: ko.observable('Jaquin'),
  lastName: ko.observable('Phoenix'),
};

displayModel.fullName = ko.computed(function() {
  return `${this.firstName()} ${this.lastName()}`;
}, displayModel);
