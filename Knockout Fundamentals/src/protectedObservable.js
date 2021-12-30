import * as ko from 'knockout';

export default function protectedObservable() {
  ko.protectedObservable = function execute(initialValue) {
    // private variables
    const _actualValue = ko.observable(initialValue);
    let _temporaryValue = initialValue;

    // computed observable that we will return
    const result = ko
      .computed({
        // always return the actual value
        read() {
          return _actualValue();
        },

        // stored in temporary spot until commit
        write(newValue) {
          _temporaryValue = newValue;
        },
      })
      .extend({ notify: 'always' });

    // if different, commit temporary value
    result.commit = function commit() {
      if (_temporaryValue !== _actualValue()) {
        _actualValue(_temporaryValue);
      }
    };

    // force subscribers to take original
    result.reset = function reset() {
      _actualValue.valueHasMutated();
      _temporaryValue = _actualValue(); // reset temporary value
    };

    return result;
  };
}

// ? Additional functions

ko.protectedObservableItem = function execute(item) {
  // looping each property and making it protected observable
  for (const param in item) {
    if (item.hasOwnProperty(param)) {
      this[param] = ko.protectedObservable(item[param]);
    }
  }

  // giving commit method to whole object
  // loop over each property and call its individual commit method
  // no need to call commit on every property
  this.commit = function run() {
    for (const property in this) {
      if (this.hasOwnProperty(property) && this[property].commit) {
        this[property].commit();
      }
    }
  }
}

// change everything to protected observable item
ko.toProtectedObservableItemArray = function execute(sourceArray) {
  const drillItems = ko.utils.arrayMap(sourceArray, function(item) {
    return new ko.protectedObservableItem(item);
  });
  return drillItems;
}

// ? usage
// ?  tags: ko.observableArray(ko.toProtectedObservableItemArray(activities))
