var leader = {
    id: 12,
    name: "Василий Иванович"
  };
  
  var soldier = {
    id: 51,
    name: "Петька"
  };
  
  // эти объекты ссылаются друг на друга!
  leader.soldierId = 51;
  soldier.leaderId = 12;
  
  var team = [leader, soldier];

  var json = JSON.stringify(team);
  console.log(json);