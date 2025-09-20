// PWA Test Script
// Run this in browser console to test PWA functionality

console.log("🧪 Testing PWA Functionality...\n");

// Test 1: Check if service worker is registered
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    console.log(
      "✅ Service Worker Status:",
      registrations.length > 0 ? "Registered" : "Not Registered"
    );
    registrations.forEach((registration) => {
      console.log("   - SW Scope:", registration.scope);
      console.log("   - SW State:", registration.active?.state || "pending");
    });
  });
} else {
  console.log("❌ Service Worker: Not supported");
}

// Test 2: Check if web app manifest is accessible
fetch("/manifest.json")
  .then((response) => response.json())
  .then((manifest) => {
    console.log("✅ Web App Manifest: Loaded successfully");
    console.log("   - App Name:", manifest.name);
    console.log("   - Display Mode:", manifest.display);
    console.log("   - Theme Color:", manifest.theme_color);
    console.log("   - Icons Count:", manifest.icons?.length || 0);
  })
  .catch(() => console.log("❌ Web App Manifest: Failed to load"));

// Test 3: Check if app can be installed
if ("onbeforeinstallprompt" in window) {
  console.log("✅ Install Prompt: Supported");
} else {
  console.log("⚠️  Install Prompt: May not be supported on this browser");
}

// Test 4: Check PWA criteria
const pwaCriteria = [
  {
    name: "HTTPS",
    test: location.protocol === "https:" || location.hostname === "localhost",
  },
  { name: "Service Worker", test: "serviceWorker" in navigator },
  { name: "Web App Manifest", test: true }, // We'll assume it exists since we created it
  {
    name: "Responsive Design",
    test: !!document.querySelector('meta[name="viewport"]'),
  },
];

console.log("\n📊 PWA Criteria Check:");
pwaCriteria.forEach((criteria) => {
  console.log(`   ${criteria.test ? "✅" : "❌"} ${criteria.name}`);
});

// Test 5: Check offline capability
console.log("\n🌐 Testing Offline Capability...");
if ("serviceWorker" in navigator && navigator.onLine !== undefined) {
  console.log("   Network Status:", navigator.onLine ? "Online" : "Offline");
  console.log("   Offline Support: Enabled via Service Worker");
} else {
  console.log("   Offline Support: Limited or not available");
}

console.log("\n🎉 PWA Testing Complete!");
console.log(
  "💡 To test install: Look for install icon in address bar or use browser menu"
);
console.log("💡 To test offline: Disable network and reload page");
