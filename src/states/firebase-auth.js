import firebaseConfig from "../../.firebase/firebase-config";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default {
    signUp(admin, onSuccess, onError) {
        createUserWithEmailAndPassword(auth, admin.email, admin.password)
            .then((userCredential) => {
                updateProfile(userCredential.user, { displayName: admin.name })
                    .then(() => {
                        onSuccess(userCredential.user)
                    })
                    .catch((error) => {
                        onError(error.message)
                    })
            })
            .catch((error) => {
                onError(error.message)
            })
    },
    login(admin, onSuccess, onError) {
        signInWithEmailAndPassword(auth, admin.email, admin.password)
            .then((userCredential) => {
                onSuccess(userCredential.user);
            })
            .catch((error) => {
                onError(error.message);
            })
    },
}