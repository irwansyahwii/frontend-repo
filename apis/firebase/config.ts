const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_measurementId
};


// When deployed, there are quotes that need to be stripped
Object.keys(config).forEach((key) => {
  const configValue = config[key] + "";
  if (configValue.charAt(0) === '"') {
    config[key] = configValue.substring(1, configValue.length - 1);
  }
});

export const firebaseConfig = config;