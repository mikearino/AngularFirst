angular
  .module('directoryApp', [])
  .controller('directoryController', function () {
    const dirList = this;
    dirList.toggle = true;
    dirList.list = [
      {
        name: 'Mike',
        age: 5999,
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      {
        name: 'Pep',
        age: 9,
        img:
          'https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg',
      },
      {
        name: 'Ron',
        age: 5,
        img:
          'https://pbs.twimg.com/profile_images/1022315277139075072/AW-rdWlG.jpg',
      },
      {
        name: 'Don',
        age: 4,
        img:
          'https://pbs.twimg.com/profile_images/976939176867196929/pYROa7jR.jpg',
      },
    ];

    dirList.addPerson = () => {
      dirList.list.push({ name: dirList.name, age: dirList.age });
      dirList.name = '';
      dirList.age = 0;
    };
  });
