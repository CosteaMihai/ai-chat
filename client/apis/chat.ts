import { axiosInstance } from "@/apis/index";
import { changeLastMessageAttribute } from "@/store/modules/chatSlice";
import { processRequest } from "@/utils/process";
import { Store } from "@reduxjs/toolkit";

export async function sendMessageToAI(store: Store) {
    try {
        let chat = JSON.parse(JSON.stringify(store.getState().chat.chat));

        const response = await axiosInstance.post('chat', {chat: processRequest(chat)})

        store.dispatch(changeLastMessageAttribute({key: 'isLoading', value: false}))
        store.dispatch(changeLastMessageAttribute({key: 'content', value: response.data.message}))

        return response;
    } catch (error) {
        console.log(error)
        store.dispatch(changeLastMessageAttribute({key: 'isError', value: true}))
        store.dispatch(changeLastMessageAttribute({key: 'isLoading', value: false}))
    }
}