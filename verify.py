import os
from playwright.sync_api import sync_playwright

def verify():
    # Ensure directories exist
    os.makedirs('screenshots', exist_ok=True)
    os.makedirs('videos', exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Record video
        context = browser.new_context(record_video_dir="videos/")
        page = context.new_page()

        try:
            # Navigate to the home page (Next.js server should be running on localhost:3000)
            page.goto("http://localhost:3000/", wait_until="domcontentloaded")

            # Wait for cold start / animations
            page.wait_for_timeout(3000)

            # Find a MagneticButton by role/text (from looking at page.tsx, there are magnetic buttons)
            # Let's locate the first button on the page that we can hover
            btn = page.locator('button, a').first
            btn.wait_for(state="visible")

            # Hover over it to trigger the mouse movement logic and spring animations
            btn.hover()
            page.wait_for_timeout(1000)

            # Move the mouse around to exercise the updated useMotionValue hooks
            box = btn.bounding_box()
            if box:
                center_x = box["x"] + box["width"] / 2
                center_y = box["y"] + box["height"] / 2
                page.mouse.move(center_x - 10, center_y - 10)
                page.wait_for_timeout(500)
                page.mouse.move(center_x + 10, center_y + 10)
                page.wait_for_timeout(500)

            page.screenshot(path="screenshots/magnetic_button.png", full_page=True)
            print("Successfully took screenshot.")

        finally:
            context.close()
            browser.close()

if __name__ == "__main__":
    verify()
