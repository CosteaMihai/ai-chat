import { ChatItem } from "@/models/chat";

export function processRequest(request: ChatItem[]) {
    request.pop();

    return request.map((item: ChatItem) => {return {content: item.content, role: item.role}})
}

export function processResponse(response: string) {
    return response.replace('```', '<code>')
}