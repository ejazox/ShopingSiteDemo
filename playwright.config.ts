import { defineConfig } from "@playwright/test";
import fs from 'fs';
export default defineConfig({
    use: {
        baseURL: 'https://www.demoblaze.com/index.html', // Define your base URL here
        headless: true,
        storageState: fs.existsSync('auth.json') ? 'auth.json' : undefined,
        screenshot: "on",
        video: "retain-on-failure",
    },
    reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
});
