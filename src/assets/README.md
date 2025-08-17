# Assets Folder

This folder contains all the static assets for your resume site.

## Profile Photo

### Current Setup
- **File**: `profile-photo.svg` - A placeholder SVG profile icon
- **Size**: 200x200 pixels (displays as 128x128px on mobile, 160x160px on desktop)
- **Format**: SVG (scalable vector graphics)

### How to Replace with Your Photo

1. **Prepare your photo**:
   - Recommended size: 400x400 pixels or larger
   - Format: JPG, PNG, or WebP
   - Professional headshot with good lighting
   - Square aspect ratio works best

2. **Replace the file**:
   - Option 1: Replace `profile-photo.svg` with your photo file
   - Option 2: Add a new photo file and update the import in `ResumeSite.jsx`

3. **Update the import** (if using a different filename):
   ```jsx
   import profilePhoto from "./assets/your-photo.jpg";
   ```

### Photo Guidelines
- **Professional appearance**: Business casual or formal attire
- **Good lighting**: Natural light or professional studio lighting
- **Neutral background**: Solid colors or subtle patterns
- **High quality**: Clear, sharp image
- **Recent**: Current professional appearance

### Supported Formats
- **JPG/JPEG**: Good for photos, smaller file size
- **PNG**: Good for photos with transparency needs
- **WebP**: Modern format, excellent compression
- **SVG**: Vector format (current placeholder)

## Other Assets

You can add other assets here such as:
- Company logos
- Project screenshots
- Certificates
- Icons or graphics

## File Naming Convention
- Use lowercase with hyphens: `profile-photo.jpg`
- Avoid spaces and special characters
- Keep names descriptive but concise
