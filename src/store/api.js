import Firebase from 'firebase'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyCGpg92mRn0DaGvfCRyYL6bV1jzDNmkcik",
  authDomain: "tether-2fb46.firebaseapp.com",
  databaseURL: "https://tether-2fb46.firebaseio.com/",
  storageBucket: "gs://tether-2fb46.appspot.com/"
}
const version = '/v0'

Firebase.initializeApp(config)

const api = Firebase.database().ref(version)
const storage = Firebase.storage().ref(version)

// ADD
api.addItem = function(type, data){
  return new Promise((resolve, reject) => {
    let key = api.child(type).push().key;

    let now = new Date();
    data.created_at = now;
    data.updated_at = now;
    data.id = key;

    var updates = {};
    updates[`${type}/${key}`] = data;
    api.update(updates).then(results => {
      resolve(data);
    }, error => {
      reject(error);
    })
  })
}

// Update
api.updateItem = function(id, type, data){
  // console.log("data: ", data);
  // console.log("args: ", arguments);
  return new Promise((resolve, reject) => {
    let key = id;

    let now = new Date();
    data.updated_at = now;

    var updates = {};
    updates[`${type}/${key}`] = data;
    return api.update(updates).then(results => {
      resolve(results);
    }, error => {
      reject(error);
    })
  })
}


// WATCH
api.watch = function(type, cb) {
  let first = true
  const ref = api.child(type);
  const handler = snapshot => {
    cb(snapshot.val())
    // if (first) {
    //   first = false
    // } else {
    //   cb(snapshot.val())
    // }
  }
  ref.on('value', handler)
  return () => {
    ref.off('value', handler)
  }
}

api.uploadFile = function(file){
  return storage.child('images/' + file.name).put(file).then(results => {
    return results;
  }, error => {
    return error;
  });
}



export default api
