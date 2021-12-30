import * as ko from 'knockout';
import $ from 'jquery';

import executeOnEnter from './executeOnEnter';
import protectedObservable from './protectedObservable';

executeOnEnter();
protectedObservable();

const data = [{ name: 'Sean' }, { name: 'Mark' }, { name: 'George' }];

const activities = [
  { id: 1, designation: 'Ball handling' },
  { id: 2, designation: 'Passing' },
  { id: 3, designation: 'Shooting' },
  { id: 4, designation: 'Rebounding' },
  { id: 5, designation: 'Transition' },
  { id: 6, designation: 'Defense' },
  { id: 7, designation: 'Team offense' },
  { id: 8, designation: 'Team defense' },
];

function TagItem(item, id) {
  return {
    designation: ko.protectedObservable(item),
    id: ko.protectedObservable(id),
  };
}

function tagItemArray(items) {
  const tagItems = ko.utils.arrayMap(items, function execute(item) {
    return new TagItem(item.designation, item.id);
  });
  return tagItems;
}

// const activities = [
//   new TagItem('Ball handling', 1),
//   new TagItem('Passing', 2),
//   new TagItem('Shooting', 3),
//   new TagItem('Rebounding', 4),
//   new TagItem('Transition', 5),
//   new TagItem('Defense', 6),
//   new TagItem('Team offense', 7),
//   new TagItem('Team defense', 8),
// ];

const viewModel = {
  name: ko.observable('Bob'),
  list: ko.observableArray(data),
  nameVisible: ko.observable(true),
  tags: ko.observableArray(tagItemArray(activities)),
  tagToAdd: ko.observable(''),
  selectedTag: ko.observable(null),
  changeName() {
    this.name('Steve');
  },
  addItem() {
    this.list.push({ name: 'Steven' });
  },
  removeItem() {
    this.list.pop();
  },
  addTag() {
    this.tags.push({ designation: this.tagToAdd() });
    this.tagToAdd('');
  },
  selectTag() {
    console.log('inside selectTag');
    viewModel.selectedTag(this);
  },

  addOnEnter() {
    const pressedKey = window.event.key;
    if (pressedKey === 'Enter') {
      viewModel.addTag();
    }
    return true;
  },
};

// * Computed observables
viewModel.displayName = ko.computed(function() {
  return `${this.name()} is ${!this.nameVisible() ? 'not' : ''} visible.`;
}, viewModel);

// ? Binding using jQuery ---->
// function handleDeleteElement() {
//   const elementToDelete = ko.dataFor(this);
//   viewModel.tags.remove(elementToDelete);
// }

// $(document).on('click', '.tag-delete', handleDeleteElement);
// ? <----

ko.applyBindings(viewModel);

// ? ES6 class syntax version of code above
// class ViewModel {
//   constructor(name) {
//     this.name = ko.observable(name);
//     this.nameVisible = ko.observable(true);
//     this.displayName = ko.computed(function() {
//       return `${this.name()} is ${!this.nameVisible() ? 'not' : ''} visible.`;
//     }, this);
//     this.list = ko.observableArray(data);
//     this.tags = ko.observableArray(activities);
//     this.tagToAdd = ko.observable('');
//   }

//   changeName() {
//     this.name('Steve');
//   }

//   addItem() {
//     this.list.push({ name: 'Steven' });
//   }

//   removeItem() {
//     this.list.pop();
//   }

//   addTag() {
//     this.tags.push({ designation: this.tagToAdd() });
//     this.tagToAdd('');
//   }
// }

// ko.applyBindings(new ViewModel('Bob'));

// ? This is the way to apply binding without using jQuery ---->
const editElements = document.querySelectorAll('.tag-edit');
const deleteElements = document.querySelectorAll('.tag-delete');
const dialogWindow = document.querySelector('#tag-dialog');
const saveButton = document.getElementById('dialog-save');

function handleDeleteElement() {
  const that = this;
  const elementToDelete = ko.dataFor(that);
  viewModel.tags.remove(elementToDelete);
}

function handleDialogClose() {
  // dialogWindow.style.display = 'none';
  // dialogWindow.classList.add('hide');
  // console.log('clicked');
}

function handleDialogOpen() {
  // dialogWindow.style.display = 'flex';
  // dialogWindow.classList.remove('hide');
  const wrapper = dialogWindow.getElementsByClassName('wrapper');
  const buttonWrapper = wrapper[0];
  console.log(buttonWrapper);
}

function handleSave() {
  console.log('clicked');
  viewModel.selectedTag().designation.commit();
}

deleteElements.forEach(button => button.addEventListener('click', handleDeleteElement));
editElements.forEach(button => button.addEventListener('click', handleDialogOpen));
// saveButton.addEventListener('click', () => {
//   handleDialogClose();
//   handleSave();
// });
// ? <----
