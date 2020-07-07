import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

import blogs from 'data/blogs';

// The initial state of the Blog container
export const initialState: ContainerState = { blogs };

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = blogSlice;
