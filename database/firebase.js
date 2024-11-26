require("dotenv").config();

const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
  where,
  query,
  getDocs,
  updateDoc,
  deleteDoc,
  getDoc,
} = require("firebase/firestore");
const {
  getStorage,
  uploadBytesResumable,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE,
  messagingSenderId: process.env.FB_SENDER_ID,
  appId: process.env.FB_APP_ID,
};

let app;
let firestoreDb;

const initializeFirebaseApp = () => {
  try {
    app = initializeApp(firebaseConfig);
    firestoreDb = getFirestore();

    return app;
  } catch (error) {
    console.log(error);
  }
};

initializeFirebaseApp();

const groupsRef = collection(firestoreDb, "groups");

async function addGroup(groupId, creatorId) {
  try {
    // Check if the group already exists
    const groupQuery = query(groupsRef, where("groupId", "==", groupId));
    const querySnapshot = await getDocs(groupQuery);

    // If group exists, return error
    if (!querySnapshot.empty) {
      return {
        error: true,
        message: "Bot added in group already",
      };
    }

    // Create new group document with default settings
    const groupData = {
      groupId: groupId,
      creatorId: creatorId,
      date_added: new Date().toISOString(),
      news_status: true,
      news_tags: [],
      trending_status: true,
      trending_tags: [],
      signals_status: true,
      signals_tags: [],
      premium_status: false,
      premium_end: 0,
      tags: [],
    };

    // Add the new group to Firestore
    await setDoc(doc(groupsRef, groupId), groupData);

    return {
      error: false,
      message: "Group added successfully",
      data: groupData,
    };
  } catch (error) {
    console.error("Error adding group:", error);
    return {
      error: true,
      message: "Failed to add group",
      details: error.message,
    };
  }
}

async function getGroupDetails(groupId) {
  try {
    // Get reference to the specific group document
    const groupRef = doc(firestoreDb, "groups", groupId.toString());

    // Fetch the document
    const groupSnap = await getDoc(groupRef);

    // Check if document exists
    if (!groupSnap.exists()) {
      return {
        error: true,
        message: "Group not found",
        data: null,
      };
    }

    // Return the document data
    return {
      error: false,
      message: "Group details retrieved successfully",
      data: {
        id: groupSnap.id,
        ...groupSnap.data(),
      },
    };
  } catch (error) {
    console.error("Error fetching group details:", error);
    return {
      error: true,
      message: "Failed to fetch group details",
      details: error.message,
    };
  }
}

async function toggleNewsStatus(groupId, status) {
  try {
    // Get reference to the specific group document
    const groupRef = doc(firestoreDb, "groups", groupId.toString());

    // First check if the group exists
    const groupSnap = await getDoc(groupRef);

    // If group doesn't exist, return error
    if (!groupSnap.exists()) {
      return {
        error: true,
        message: "Group not found",
        data: null,
      };
    }

    // Validate status parameter
    if (status !== "ON" && status !== "OFF") {
      return {
        error: true,
        message: "Invalid status parameter. Must be 'ON' or 'OFF'",
        data: null,
      };
    }

    // Convert status to boolean
    const newStatus = status === "ON";

    // Update the news_status field
    await updateDoc(groupRef, {
      news_status: newStatus,
    });

    // Return success response with updated data
    return {
      error: false,
      message: `News status successfully set to ${status}`,
      data: null,
    };
  } catch (error) {
    console.error("Error toggling news status:", error);
    return {
      error: true,
      message: "Failed to toggle news status",
      details: error.message,
    };
  }
}

async function toggleSignalStatus(groupId, status) {
  try {
    // Get reference to the specific group document
    const groupRef = doc(firestoreDb, "groups", groupId.toString());

    // First check if the group exists
    const groupSnap = await getDoc(groupRef);

    // If group doesn't exist, return error
    if (!groupSnap.exists()) {
      return {
        error: true,
        message: "Group not found",
        data: null,
      };
    }

    // Validate status parameter
    if (status !== "ON" && status !== "OFF") {
      return {
        error: true,
        message: "Invalid status parameter. Must be 'ON' or 'OFF'",
        data: null,
      };
    }

    // Convert status to boolean
    const newStatus = status === "ON";

    // Update the news_status field
    await updateDoc(groupRef, {
      signals_status: newStatus,
    });

    // Return success response with updated data
    return {
      error: false,
      message: `News status successfully set to ${status}`,
      data: null,
    };
  } catch (error) {
    console.error("Error toggling news status:", error);
    return {
      error: true,
      message: "Failed to toggle news status",
      details: error.message,
    };
  }
}

async function toggleTrendingStatus(groupId, status) {
  try {
    // Get reference to the specific group document
    const groupRef = doc(firestoreDb, "groups", groupId.toString());

    // First check if the group exists
    const groupSnap = await getDoc(groupRef);

    // If group doesn't exist, return error
    if (!groupSnap.exists()) {
      return {
        error: true,
        message: "Group not found",
        data: null,
      };
    }

    // Validate status parameter
    if (status !== "ON" && status !== "OFF") {
      return {
        error: true,
        message: "Invalid status parameter. Must be 'ON' or 'OFF'",
        data: null,
      };
    }

    // Convert status to boolean
    const newStatus = status === "ON";

    // Update the news_status field
    await updateDoc(groupRef, {
      trending_status: newStatus,
    });

    // Return success response with updated data
    return {
      error: false,
      message: `News status successfully set to ${status}`,
      data: null,
    };
  } catch (error) {
    console.error("Error toggling news status:", error);
    return {
      error: true,
      message: "Failed to toggle news status",
      details: error.message,
    };
  }
}

// Update the exports
module.exports = {
  addGroup,
  getGroupDetails,
  toggleNewsStatus,
  toggleSignalStatus,
  toggleTrendingStatus,
};
