// * Knockout bindings

// ! Built-in Bindings
// * 1. Text and Appearance
// * 2. Forms
// * 3. Control Flow
// * 4. Templates
// ! Custom Bindings

// * 1. Text and Appearance
// visible - toggle visible/invisible of DOM element
// text - text value of DOM element
// html - raw HTML of DOM element
// css - CSS classes of DOM element
// style - raw style attribute of DOM element
// attr - any arbitrary attribute of DOM element

// * 2. Forms
// click - handler invoked when DOM element clicked
// event - handler invoked for arbitrary event on DOM element
// submit - handler invoked when form submitted
// enable - DOM element enabled if true
// disable - DOM element disabled if true
// value - value od DOM element
// checked - attached to checkbox and radio button
// options - collection of elements in dropdown or multi-select
// selectedOpitons - currently selected item(s) of dropdown or multi-select
// uniqueName - ensure DOM element has 'name' attribute

// * 3. Control flow
// if - executes if condition is true
// ifnot - executes if condition is false
// foreach - executes for each item in collection
// with - executes for object specified (child models)

// * 4. Templates
// JavaScript templates - traditional JavaScript template in <script> tag
// Containerless Control Flow (Anonymous) - template-less, comment-based syntax

// ? Parent binding contexts
// $data - current data bound item
// $parent - item from parent binding context
// $parents - array containing all parent binding contexts
// $root - item at the top of the binging

// ! Custom bindings
// ko.bindingHandlers.yourBindingName = {
//  init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
// ?  This will be called when the binding is first applied to an element
// ?  Set up any initial state, event handlers, etc. here
//  },
//  update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
// ?  This will be called once when the binding is first applied to an element,
// ?  and againg whenever the associated observable changes value.
// ?  Update the DOM element based on the supplied values here.
//  }
// }
