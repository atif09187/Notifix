/**
 * Notifox - Master Configuration File
 * Developed by Gondal Studios
 * 
 * Centralized SEO metadata, application details, and download targets.
 */

const NOTIFOX_CONFIG = {
  // Production Website Domain (Used for Canonicals, Sitemap & Schema)
  siteUrl: "https://notifox.vercel.app",

  // Application Information
  appName: "Notifox",
  developerName: "Gondal Studios",
  category: "Tools",
  version: "1.2.4",
  versionCode: "124",
  apkSize: "8.4 MB",
  androidRequirement: "Android 8.0 (Oreo) and up",
  releaseDate: "November 2024",
  lastUpdated: "November 2024",
  packageName: "com.gondalstudios.notifox",

  // Download Target (Supports Google Drive, MediaFire, or self-hosted direct APK)
  downloadUrl: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE",

  // Developer Support & Inquiries
  contactEmail: "gondalstudios.official@gmail.com",

  // Visual Assets
  appIconPath: "assets/icons/app-icon.png",
  faviconPath: "assets/icons/favicon.png",
  ogImagePath: "assets/icons/app-icon.png",

  // App Descriptions
  tagline: "Android Notification Saver & Notification History Manager",
  aboutText: "Notifox helps you keep track of your notifications in one convenient place. View saved notification history, organize notifications by application and revisit supported notifications whenever you need them.",
  
  // Professional SEO Metadata
  seoTitle: "Notifox – Notification Saver & History for WhatsApp and Android",
  seoDescription: "Save and manage your notification history with Notifox. Keep track of WhatsApp and other app notifications in one convenient place. Download Notifox APK for free.",
  keywords: "Notifox, Notification Saver, Notification History App, WhatsApp Notification Saver, Android Notification History, Notification Manager, Notification Tracker, WhatsApp Notification History, Save WhatsApp Notifications, Social Media Notification History, Deleted Message Notification History, Notification History Android, Notification Saver APK, Free Notification History App, Android Notification Tracker, WhatsApp Notification History App",

  // Optimized Screenshot Metadata with Natural Target Keywords
  screenshots: [
    {
      src: "assets/screenshots/screenshot-1.png",
      alt: "Notifox Android notification history app timeline showing saved notification log",
      caption: "Consolidated Notification History Timeline"
    },
    {
      src: "assets/screenshots/screenshot-2.png",
      alt: "Notifox app-wise notification manager filtering WhatsApp and social alerts",
      caption: "App-Wise Notification Organization"
    },
    {
      src: "assets/screenshots/screenshot-3.png",
      alt: "Notifox WhatsApp notification saver showing captured chat alerts and preview history",
      caption: "Dedicated WhatsApp & Messaging History"
    },
    {
      src: "assets/screenshots/screenshot-4.png",
      alt: "Notifox date-wise notification tracker with calendar filter for Android notifications",
      caption: "Date-Wise Notification Calendar Filter"
    },
    {
      src: "assets/screenshots/screenshot-5.png",
      alt: "Notifox notification details view displaying full message preview captured by listener",
      caption: "Detailed Notification Message Reader"
    },
    {
      src: "assets/screenshots/screenshot-6.png",
      alt: "Notifox background notification listener settings and private on-device storage options",
      caption: "Private On-Device Notification Storage Settings"
    }
  ]
};

// Expose globally for browser runtime and Node export
if (typeof module !== "undefined" && module.exports) {
  module.exports = NOTIFOX_CONFIG;
} else {
  window.NOTIFOX_CONFIG = NOTIFOX_CONFIG;
}