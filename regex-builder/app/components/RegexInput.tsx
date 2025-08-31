'use client';
import { useState } from 'react';

interface Props {
  onSubmit: (rule: string) => void;
}

export default function RegexInput({ onSubmit }: Props) {
  const [rule, setRule] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rule.trim()) onSubmit(rule);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Enter rule (e.g., match emails)"
        value={rule}
        onChange={(e) => setRule(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate
      </button>
    </form>
  );
}
