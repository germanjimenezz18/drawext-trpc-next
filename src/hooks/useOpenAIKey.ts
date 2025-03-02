import { useState, useEffect } from 'react';

export function useOpenAIKey() {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadApiKey = async () => {
      try {
        const storedKey = localStorage.getItem('openai_api_key');
        setApiKey(storedKey || '');
      } finally {
        setIsLoading(false);
      }
    };

    loadApiKey();
  }, []);

  const saveApiKey = (key: string) => {
    localStorage.setItem('openai_api_key', key);
    setApiKey(key);
  };

  const removeApiKey = () => {
    localStorage.removeItem('openai_api_key');
    setApiKey('');
  };

  return { apiKey, isLoading, saveApiKey, removeApiKey };
}
