"use client";

import FreePrompt from "../../src/legacy-pages/FreePrompt";

export default function PromptPage() {
  return (
    <div className="font-sora">
      <main className="fullpage-track">
        <section className="fullpage-section fullpage-section--free-prompt fullpage-section--standalone-prompt">
          <FreePrompt />
        </section>
      </main>
    </div>
  );
}
