"use client"

import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"

export function useAuthUser() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null)
        setLoading(false)
        return
      }

      const userRef = doc(db, "users", firebaseUser.uid)
      const docSnap = await getDoc(userRef)

      if (docSnap.exists()) {
        // ✅ User already exists
        setUser(docSnap.data())
      } else {
        // ❌ User does not exist – create with defaults
        const defaultUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          fullName: firebaseUser.displayName || "New User",
          photoURL: firebaseUser.photoURL || "/defaultUserLogo.jpg",
          createdAt: new Date().toISOString(),
          location: "Not set",
          website: "https://example.com",
          age: null,
          institution: "Not set",
          faculty: "Not set",
          bio: "This is your bio. Tell us more about you.",
          followers: 0,
          following: 0,
        }

        await setDoc(userRef, defaultUser)
        setUser(defaultUser)
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return { user, loading }
}
