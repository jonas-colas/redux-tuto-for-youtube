import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: 1,
    title: 'Learning Redux Toolkit',
    content:
      'I have heard good things about it. lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur ',
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  },
  {
    id: 2,
    title: 'The Slice is very good one',
    content:
      'So lets practice it together.lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur',
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }  
  },
];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find(post => post.id === postId);
      if(existingPost){
        existingPost.reactions[reaction]++
      }
    }
  },
});

export const allPosts = (state) => state.posts;

export const { addPost, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
