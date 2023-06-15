import firebaseConfig from "../../.firebase/firebase-config";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, push, update, get, onValue } from "firebase/database";


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const refDatabase = ref(database);

export default {
    postAdmin(admin, onError) {
        const items = {};
        items["/admins/" + admin.id] = admin;
        update(refDatabase, items)
            .then(() => {
                onError(null)
            })
            .catch((error) => {
                onError(error.message)
            })
    },
    postQuestion(adminId, question, onError) {
        let items = {};
        question.id = push(child(refDatabase, "/admins" + adminId + "/questions/")).key;
        items["/admins" + adminId + "/questions/" + question.id] = question;
        update(refDatabase, items)
            .then(() => {
                onError(null)
            })
            .catch((error) => {
                onError(error.message)
            })
    },
    getQuestions(adminId, questionId, onSuccess) {
        get(child(refDatabase, "/admins" + adminId + "/questions/" + questionId))
            .then((snapshot) => {
                snapshot.exists() ? onSuccess(snapshot.val()) : onSuccess(null);
            })
            .catch(() => {
                onSuccess(null);
            });
    },
    watchPostings(adminId, questionId, onSuccess) {
        onValue(child(refDatabase, "/admins" + adminId + "/questions/" + questionId + "/postings/"), (snapshot) => {
            snapshot.exists() ? onSuccess(snapshot.val()) : onSuccess(null);
        });
    },
    postWord(uid, qid, rid, word, onError) {
        let items = {};
        items["/admins" + uid + "/questions/" + qid + "/postings/" + word + "/weights/" + rid] = Date.now();
        update(refDatabase, items)
            .then(() => {
                onError(null)
            })
            .catch((error) => {
                onError(error.message)
            })
    },
}