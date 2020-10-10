// Dependency inversion principle

class Fetch {
  request(url) {
    return Promise.resolve(`${url} data from fetch`)
  }
}
class LocalStorage {
  get(url) {
    const dataFromLocalStorage = `${url} data from Local Storage`
    return dataFromLocalStorage
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }
  clientGet(key) {
    return this.fetch.request(key)
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }
  clientGet(key) {
    return this.localStorage.get(key)
  }
}

class DataBase {
  constructor(client) {
    this.client = client
  }
  getData(key) {
    return this.client.clientGet(key)
  }
}

const db = new DataBase(new FetchClient());
// const db = new DataBase(new LocalStorageClient())

console.log(db.getData('rand'))