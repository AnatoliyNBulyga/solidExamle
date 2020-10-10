// Liskov substitution principle

class Person {
  
}

class Member extends Person {
  access() {
    console.log('У вас есть доступ')
  }
}

class Guest extends Person {
  access() {
    throw new Error('У вас нет доступа')
  }
}



class Frontender extends Member {

}

class Backender extends Member {

}

class DeveloperFromAnotherCompany extends Guest {
  access() {
    throw new Error('У вас нет доступа')
  }
}

function openSecretDoor(member) {
  member.access()
}

openSecretDoor(new Frontender())
openSecretDoor(new Backender())
// openSecretDoor(new DeveloperFromAnotherCompany())