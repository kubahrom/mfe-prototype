import { useUserIdStoreState } from '@store/UserIdStore';
import { db } from '../firestore/config';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useLike = () => {
  const [likes, setLikes] = useState<number[]>([]);
  const [docId, setDocId] = useState<string>('');

  const userId = useUserIdStoreState();

  const like = async (recipeId: number) => {
    try {
      if (docId) {
        let updatedLikes = likes;
        if (likes.includes(recipeId)) {
          updatedLikes = likes.filter((id) => id !== recipeId);
        } else {
          updatedLikes = [...likes, recipeId];
        }

        await updateDoc(doc(db, 'lists', docId), {
          ids: updatedLikes,
        });

        setLikes(updatedLikes);
      } else {
        await addDoc(collection(db, 'lists'), {
          ids: [recipeId],
          owner: userId,
        });
        setLikes([recipeId]);
      }
    } catch (e) {
      console.error('Error liking recipe', e);
    }
  };

  useEffect(() => {
    const getLikes = async () => {
      const listsRef = collection(db, 'lists');
      const q = query(listsRef, where('owner', '==', userId));
      const querySnapshot = await getDocs(q);

      const docData = querySnapshot.docs.map((doc) => {
        return {
          ids: doc.data(),
          docId: doc.id,
        };
      });
      setLikes(docData[0]?.ids.ids || []);
      setDocId(docData[0]?.docId || '');
    };

    getLikes();
  }, [userId]);

  return { like, likes };
};
