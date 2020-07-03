angular
  .module('directoryApp', [])
  .controller('directoryController', function () {
    const dirList = this;
    dirList.list = [
      { name: 'Mike', age: 5999 },
      { name: 'Pep', age: 9 },
      { name: 'Ron', age: 5 },
      { name: 'Don', age: 4 },
    ];

    dirList.addPerson = () => {
      dirList.list.push({ name: dirList.name, age: dirList.age });
      dirList.name = '';
      dirList.age = 0;
    };
  });
