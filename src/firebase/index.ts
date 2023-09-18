import admin from "firebase-admin" ;
import serviceAccount from "./config";
import { getApps } from "firebase-admin/app";

if(! getApps().length){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
    });
}


export const firestore = admin.firestore();

