var ambientDeclarations;
(function (ambientDeclarations) {
    var name = ko.observable('Pawel Skwirowski');
    var id = ko.observable(1);
    var person = {
        id: id,
        fullName: name,
    };
    var value = person.fullName();
    console.log(value);
})(ambientDeclarations || (ambientDeclarations = {}));
//# sourceMappingURL=ambient.js.map