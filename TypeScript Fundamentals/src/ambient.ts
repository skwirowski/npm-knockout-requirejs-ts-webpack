module ambientDeclarations {
  declare let ko: KnockoutStatic;

  const name = ko.observable('Pawel Skwirowski');
  const id = ko.observable(1);
  const person = {
    id,
    fullName: name,
  };
  const value: string = person.fullName();
  console.log(value);
}
