import { SetStateAction, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ApiKeyFormProps {
  onSave: (key: string) => void;
}

export function ApiKeyForm({ onSave }: ApiKeyFormProps) {
  const [key, setKey] = useState('');

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">OpenAI API Key Required</h3>
        <p className="text-sm text-muted-foreground">
          Please enter your OpenAI API key to enable AI analysis
        </p>
      </div>
      <div className="flex gap-2">
        <Input
          type="password"
          placeholder="sk-..."
          value={key}
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setKey(e.target.value)}
        />
        <Button onClick={() => onSave(key)}>Save</Button>
      </div>
    </div>
  );
}
