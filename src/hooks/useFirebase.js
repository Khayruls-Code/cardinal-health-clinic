import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, FacebookAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication()
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState("")
  const [name, setName] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conPass, setConPass] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  //google sing in
  const singInUsingGoogle = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user)
        console.log(result.user)
      })
      .catch(error => setError(error.message))
      .finally(setIsLoading(false))
  }

  //facebook singin

  const singInUsingFacebook = () => {
    setIsLoading(true)
    return signInWithPopup(auth, facebookProvider)
      .then(result => {
        setUser(result.user)
        console.log(result.user)
      })
      .catch(error => setError(error.message))
      .finally(setIsLoading(false))
  }

  //getting input value

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleImgUrl = (e) => {
    setImgUrl(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleConPassword = (e) => {
    setConPass(e.target.value)
  }

  const updateNameImg = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgUrl,
    })
      .then(() => { })
      .catch(error => setError(error.message))
  }

  //sing up using email password

  const singUpUsingPassword = (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (name.length < 3) {
      setError('Name Must be atlest 3 charecters')
      return;
    }
    if (email === '') {
      setError('Email must be filled')
      return;
    }
    if (!validateEmail(email)) {
      setError('Please Enter a valid Email')
      return;
    }
    if (password === '') {
      setError('Enter password first')
      return;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError("Password have to be minimum eight characters, at least one letter and one number")
      return
    }
    if (conPass === '') {
      setError('Confirm the pasword !!')
      return;
    }
    if (conPass !== password) {
      setError('Passwords are not matching')
      return;
    }
    return createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setError('Successfully Registered !!!')
        updateNameImg()
        setUser(result.user)
        console.log(result.user)
      })
      .catch(error => setError(error.message))
      .finally(setIsLoading(false))
  }

  ///sing in useing password and email
  const singInUsingPassword = () => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)
        setError('Successfully logged in !!!')
      })
      .catch((error => setError(error.message)))
      .finally(setIsLoading(false))
  }

  //email validation
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //get curent user

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unSubscribe;
  }, [])

  //sing out user
  const singOutUser = (e) => {
    setIsLoading(true)
    e.preventDefault()
    signOut(auth)
      .then(() => setUser({}))
      .catch(error => setError(error.message))
      .finally(setIsLoading(false))
  }

  return {
    singInUsingGoogle,
    user,
    error,
    singOutUser,
    singInUsingFacebook,
    handleName,
    handleImgUrl,
    handleEmail,
    handlePassword,
    handleConPassword,
    singUpUsingPassword,
    singInUsingPassword,
    isLoading
  }
}

export default useFirebase;