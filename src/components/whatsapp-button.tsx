import { WHATSAPP_URL } from "@/lib/booking";

/** Floating "chat on WhatsApp" button, bottom-left (the lead widget sits bottom-right). */
export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Saasible on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      style={{
        left: "max(16px, calc(env(safe-area-inset-left, 0px) + 16px))",
        bottom: "max(16px, calc(env(safe-area-inset-bottom, 0px) + 16px))",
      }}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C8.84 3 3.01 8.83 3.01 15.994c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75a12.95 12.95 0 0 0 6.32 1.62h.01C23.17 28.87 29 23.04 29 15.88 29 8.72 23.17 3 16.004 3Zm0 23.68h-.01a10.76 10.76 0 0 1-5.48-1.5l-.39-.23-3.97 1.04 1.06-3.87-.26-.4a10.7 10.7 0 0 1-1.65-5.73c0-5.93 4.83-10.76 10.77-10.76 5.93 0 10.75 4.73 10.75 10.65 0 5.93-4.89 10.8-10.82 10.8Zm5.9-8.06c-.32-.16-1.91-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.33c.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38Z" />
      </svg>
    </a>
  );
}
