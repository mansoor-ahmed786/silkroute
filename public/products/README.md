# Silk Route — Product Photos Directory

Place your high-resolution fabric photos here.

### Supported formats
- `.jpg`, `.jpeg`, `.png`, `.webp`

### How to use
When you upload an image file into this directory (for example `lawn-blue-01.jpg`):
1. In `src/data/products.ts`, specify the image path as:
   ```ts
   images: [
     "/products/lawn-blue-01.jpg",
     "/products/lawn-blue-02.jpg"
   ]
   ```
2. The image will instantly appear on:
   - Product Cards
   - Catalogue Grid
   - Dedicated Product Detail Modal & View
   - Thumbnail Gallery
   - Search Modal
