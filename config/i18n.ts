export interface PageTranslation {
  title: string;
  message: string;
}

export interface InterfaceTranslations {
  message: string;
}

export interface BlockPageTranslation extends PageTranslation {}
export interface ErrorPageTranslation extends PageTranslation {}
export interface ChallengePageTranslation extends PageTranslation {}

export const blockPageTranslations: Record<string, BlockPageTranslation> = {
  ip: {
    title: "Access Denied",
    message: "Your IP address is not allowed to access this website.",
  },
  waf: {
    title: "Access Denied",
    message: "This request has been blocked for security reasons.",
  },
  "rate-limit": {
    title: "Access Denied",
    message: "Too many requests. Please wait a moment and try again.",
  },
} as const;

export const errorPageTranslations: Record<string, ErrorPageTranslation> = {
  "500s": {
    title: "Internal Server Error",
    message:
      "Please try again later. An unexpected error occurred on the server.",
  },
  "1000s": {
    title: "DNS Resolution Error",
    message: "The requested hostname could not be resolved.",
  },
} as const;

export const challengePageTranslations: Record<
  string,
  ChallengePageTranslation
> = {
  interactive: {
    title: "Security Check",
    message: "Please complete the CAPTCHA to access this website.",
  },
  managed: {
    title: "Security Check",
    message: "Please complete the CAPTCHA to access this website.",
  },
  country: {
    title: "Security Check",
    message: "Additional verification is required to access this website.",
  },
  javascript: {
    title: "Security Check",
    message:
      "Please wait a moment while our security system verifies your request.",
  },
} as const;

export const interfaceTranslations: Record<string, InterfaceTranslations> = {
  "error-details": {
    message: "Learn more",
  },
  "connection-tracking": {
    message: "Connection Tracking",
  },
  "network-status-you": {
    message: "BROWSER",
  },
  "network-status-cdn": {
    message: "CLOUDFLARE",
  },
  "network-status-origin": {
    message: "ORIGIN",
  },
} as const;
