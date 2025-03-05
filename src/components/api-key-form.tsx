import { SetStateAction, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SaveAll } from 'lucide-react';
interface ApiKeyFormProps {
  onSave: (key: string) => void;
}

export function ApiKeyForm({ onSave }: ApiKeyFormProps) {
  const [key, setKey] = useState('');

  return (
    <div className="space-y-4 rounded-xl p-4 border">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">API Key Required</h3>
      </div>
      <div className="flex gap-2">
        <Input
          type="password"
          placeholder="sk-..."
          value={key}
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setKey(e.target.value)}
        />
        <Button variant={'indigo'} onClick={() => onSave(key)}> <SaveAll />Save</Button>
      </div>
    </div>
  );
}
