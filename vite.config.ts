import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { renameSync, existsSync, cpSync } from "fs";
import { resolve } from "path";
import { execSync } from "child_process";
import AdmZip from "adm-zip"; // Install: npm i adm-zip

export default defineConfig({
  plugins: [
    react(),
    {
      name: "rename-and-zip",
      closeBundle() {
        const rootDir = __dirname;
        const distPath = resolve(rootDir, "dist");
        const oxygenPath = resolve(rootDir, "Oxygen");
        const zipPath = resolve(rootDir, "Oxygen.zip");

        try {
          // 1️⃣ Rename dist -> Oxygen
          if (existsSync(oxygenPath)) {
            console.log("Removing old Oxygen folder...");
            execSync(`rm -rf "${oxygenPath}"`);
          }
          if (existsSync(distPath)) {
            renameSync(distPath, oxygenPath);
            console.log("✅ Renamed dist → Oxygen");
          } else {
            console.warn("⚠️ dist folder not found. Build might have failed.");
            return;
          }

          // 1.5️⃣ Copy server folder into Oxygen/server if present
          const serverSrc = resolve(rootDir, "server");
          const serverDest = resolve(oxygenPath, "server");
          if (existsSync(serverSrc)) {
            cpSync(serverSrc, serverDest, { recursive: true });
            console.log("✅ Copied server → Oxygen/server");
          } else {
            console.warn("ℹ️ server folder not found. Skipping server copy.");
          }

          // 2️⃣ Zip Oxygen -> Oxygen.zip
          if (existsSync(zipPath)) {
            console.log("Removing old Oxygen.zip...");
            execSync(`rm -f "${zipPath}"`);
          }
          const zip = new AdmZip();
          zip.addLocalFolder(oxygenPath);
          zip.writeZip(zipPath);

          console.log("✅ Created Oxygen.zip");
        } catch (err) {
          console.error("❌ Error in rename-and-zip plugin:", err);
        }
      },
    },
  ],
});
