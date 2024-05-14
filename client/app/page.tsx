'use client';
import { useState } from "react";
import { useAppSelector, useAppStore } from '@/store/hooks';
import { addMessageToChat } from '@/store/modules/chatSlice';

import sendSvg from "@/public/send.svg";

import Textarea from '@/app/components/textarea';
import Button from '@/app/components/button';
import Message from '@/app/components/message';
import Default from '@/app/components/default';

import { sendMessageToAI } from "@/apis/chat";
import { ChatItem } from "@/models/chat";

export default function Home() {
    const store = useAppStore()
    const chat = useAppSelector((state) => state.chat.chat)

    const [formData, setFormData] = useState({ message: '' })

    function onChange(event: any) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    async function sendMessage() {
        store.dispatch(addMessageToChat({ content: formData.message, role: 'user', isLoading: false, isError: false }))
        store.dispatch(addMessageToChat({ content: '', role: 'assistant', isLoading: true, isError: false }))

        const response = await sendMessageToAI(store)

        if(response?.status === 201) {
            setFormData({ message: '' });
        }
    }

    return (
        <main className='flex min-h-screen flex-col items-center justify-between px-10 pt-10'>
            <div className="w-full">
                {chat.length ? chat.map((item: ChatItem, index: number) => <Message item={item} key={index}></Message>) : <Default></Default>}
            </div>

            <div className="w-full sticky bottom-0 pb-10 bg-white">                
                <div className="relative">
                    <Textarea name='message' placeholder='Message to Open AI' value={formData.message} onChange={onChange}></Textarea>

                    <div className="absolute top-[calc(50%-20px)] right-3">
                        <Button icon={sendSvg} onClick={sendMessage} disabled={chat.some((item: ChatItem) => item.isLoading)}></Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
