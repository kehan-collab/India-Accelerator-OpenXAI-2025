'use client';

interface Props {
  regex: string;
}

export default function RegexDisplay({ regex }: Props) {
  return (
    <div className="mt-4 p-4 border rounded bg-gray-50">
      <p className="font-mono break-all">{regex}</p>
      <button
        onClick={() => navigator.clipboard.writeText(regex)}
        className="mt-2 text-sm text-blue-500 hover:underline"
      >
        Copy
      </button>
    </div>
  );
}
