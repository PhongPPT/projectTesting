// Import necessary modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import rateLimit from 'express-rate-limit';
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIkofo6DLfNf5jjvjO6hzkJrXw0tboTyE",
  authDomain: "testapi-fd352.firebaseapp.com",
  projectId: "testapi-fd352",
  // storageBucket: "testapi-fd352.firebasestorage.app",
  storageBucket: "testapi-fd352.appspot.com",
  messagingSenderId: "223425154735",
  appId: "1:223425154735:web:f916d99c5630b692a2ce5a",
  measurementId: "G-W7YBKLYGQ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// File server setup
const serverApp = express();
const PORT = 3001;

serverApp.use(
  cors({
    origin: "http://localhost:5173",
  })
);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: "Too many requests, please try again later."
});
 serverApp.use(limiter);
serverApp.use(bodyParser.json());

// // 🔹 CREATE
// serverApp.post("/tasks", async (req, res) => {
//   try {
//     const data = req.body;
//     const docRef = await addDoc(collection(db, "tasks"), data);
//     res.status(201).send({ id: docRef.id });
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });
serverApp.post("/tasks", async (req, res) => {
  const { title, type, ແຮງມາ: strength, ລາຍລະອຽດ: description } = req.body;

  if (!title || !type) {
    return res.status(400).send("All fields are required");
  }

  const data = {
    title: String(title),
    type: String(type),
    ແຮງມາ: strength ? String(strength) : "",
    ລາຍລະອຽດ: description ? String(description) : "",
  };

  try {
    const docRef = await addDoc(collection(db, "tasks"), data);
    res.status(201).send({ id: docRef.id });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 🔹 READ ALL
serverApp.get("/tasks", async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, "tasks"));
    const tasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 🔹 UPDATE
serverApp.put("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const taskDoc = doc(db, "tasks", id);
    await updateDoc(taskDoc, data);
    res.send("Updated successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 🔹 DELETE
serverApp.delete("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const taskDoc = doc(db, "tasks", id);
    await deleteDoc(taskDoc);
    res.send("Deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

serverApp.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
