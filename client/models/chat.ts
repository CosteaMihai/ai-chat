export interface ChatItem {
    content: string;
    role: string;
    isLoading: boolean;
    isError: boolean;
}

export interface ChangeMessage {
    key: keyof ChatItem;
    value: any;
}