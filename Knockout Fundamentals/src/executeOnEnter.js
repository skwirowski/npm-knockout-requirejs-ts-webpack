import * as ko from 'knockout';
import $ from 'jquery';

export default function executeOnEnter() {
  ko.bindingHandlers.executeOnEnter = {
    init(element, valueAccessor, allBindingsAccessor, displayModel) {
      const value = valueAccessor();

      element.addEventListener('keypress', function execute(event) {
        const pressedKey = event.key;
        if (pressedKey === 'Enter') {
          value.call(displayModel);
          return false;
        }
        return true;
      });

      // ? jQuery verion ---->
      // $(element).keypress(function(event) {
      //   const pressedKey = window.event.key;
      //   if (pressedKey === 'Enter') {
      //     value.call(viewModel);
      //     return false;
      //   }
      //   return true;
      // });
      // ? <----
    },
  };
}
