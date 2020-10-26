import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'xxxx',
  authDomain: 'ecommerce-6a58f.firebaseapp.com',
  databaseURL: 'https://ecommerce-6a58f.firebaseio.com',
  projectId: 'ecommerce-6a58f',
  storageBucket: 'ecommerce-6a58f.appspot.com',
  messagingSenderId: '475213768195',
  appId: '1:475213768195:web:5ec994b70393838d1ad036',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
