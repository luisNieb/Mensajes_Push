import { applicationDefault, initializeApp, refreshToken } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';

//$env:GOOGLE_APPLICATION_CREDENTIALS="C:\cursos\REACT\Mensajes_Push\fir-me-be37e-firebase-adminsdk-4b8e1-7bfc368d0e.json"


initializeApp({
  credential: applicationDefault(),
});



// This registration token comes from the client FCM SDKs.
const registrationToken = 'cJfFYbP-QACjF_d_C35vv8:APA91bGNcOrV-DHEjbgU0bOa5ZzqlMqKE6QTapv7WEJbhv5hifmkqTlYpqZo9-t78BtEEtZLCgxVDeGueK_A-5u2EUrMimw1h_pi5xsR8t3gPXer9jiag4aYnspAn6O3WBJ7-G81yarw';

const message = {
    notification:{
        title:"hola",
        body:"Alienigena esto es un llamado interestelar"
    },
  data: {
    score: '850',
    time: '2:45'
  },
  token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
getMessaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });

