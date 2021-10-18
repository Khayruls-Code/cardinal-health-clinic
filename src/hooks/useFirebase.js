import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication()
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState("")

  //google sing in
  const singInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user)
        console.log(result.user)
      })
      .catch(error => setError(error.message))
  }

  //facebook singin

  const singInUsingFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => setUser(result.user))
      .catch(error => setError(error.message))
  }

  //get curent user

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
    })
    return () => unSubscribe;
  }, [])

  const singOutUser = (e) => {
    e.preventDefault()
    signOut(auth)
      .then(() => setUser({}))
      .catch(error => setError(error.message))
  }

  return {
    singInUsingGoogle,
    user,
    error,
    singOutUser,
    singInUsingFacebook
  }
}

export default useFirebase;