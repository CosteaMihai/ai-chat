import { ChangeMessage, ChatItem } from '@/models/chat';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
    chat: ChatItem[];
}

const initialState: ChatState = {
    chat: [],
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessageToChat: (state, action: PayloadAction<ChatItem>) => {
            state.chat.push(action.payload);
        },

        changeLastMessageAttribute: (state, action: PayloadAction<ChangeMessage>) => {
            const lastItem: any = state.chat.pop();

            if(lastItem) {
                lastItem[action.payload.key] = action.payload.value;
                state.chat.push(lastItem)
            }
        },
    },
});

export const { addMessageToChat, changeLastMessageAttribute } = chatSlice.actions;
export default chatSlice.reducer;