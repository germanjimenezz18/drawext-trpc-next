export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string | {
    type: 'text' | 'image';
    text?: string;
    image?: string;
  }[];
}

export interface ChatMessage {
  content: string | {
    type: 'text' | 'image';
    text?: string;
    image?: string;
  }[];
  role: 'user' | 'assistant';
}
