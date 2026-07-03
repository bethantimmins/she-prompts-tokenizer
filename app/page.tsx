"use client";

import { TokenizerInput } from "../components/tokenComponents";
import './globals.css';

export default function TokenizerPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cream text-ink p-4">
      <div className="w-full max-w-3xl">
        <div className="mb-8">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-pink mb-3">
            She <em className="not-italic">Prompts</em> · Free Tool
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-normal mb-2">Claude Token Counter</h1>
          <p className="text-text-mid">
            Count tokens for the latest Claude models including <span className="text-pink">Claude Sonnet 4.5, Opus 4.1, Haiku 4.5</span> and more. Upload <span className="text-pink">text files, PDFs or images, or paste text directly</span>.
          </p>
          <p className="text-text-soft">
            We do not store any files or data. They are discarded immediately after processing.
          </p>
          <p className="text-sm text-text-mid mt-2">
            Explore the source code <a href="https://github.com/dhamaniasad/claude-tokenizer">here</a>.
          </p>
        </div>

        <TokenizerInput />

        <footer className="mt-10 text-text-soft text-sm text-center space-y-2">
          <p>This website is not affiliated with or endorsed by Anthropic.</p>
          <p>
            See my other projects: <a href="https://www.memoryplugin.com?ref=claude-tokenizer">MemoryPlugin</a> - long term memory for all your AI tools
          </p>
        </footer>
      </div>
    </div>
  );
}