"use client";

import { handleWhatsAppClick, handleCallClick } from "../lib/tracking";

export function TrackedWhatsAppLink({
  href,
  className,
  children,
  label = "WhatsApp Click",
  target = "_blank",
  rel = "noreferrer",
  ...props
}) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => handleWhatsAppClick(label)}
      {...props}
    >
      {children}
    </a>
  );
}

export function TrackedCallLink({
  href,
  className,
  children,
  label = "Call Click",
  ...props
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => handleCallClick(label)}
      {...props}
    >
      {children}
    </a>
  );
}
