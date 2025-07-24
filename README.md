📁 React File Upload App with Progress Bar and Preview (Day 25 of #100DaysOfReact)
This project is a fully functional React file upload application with image preview, upload progress bar, and backend integration using Express and Cloudinary for cloud image storage. The app allows users to select an image, preview it instantly, upload it to the backend, and view the uploaded image with a link to open the full version in a new tab.

🚀 Features
Select and preview image before uploading
Upload progress bar to track upload status
Upload images to Cloudinary via Express backend
Display uploaded image with clickable full image view
Error handling for unsupported files and upload issues
Clean and responsive UI

🛠️ Tech Stack
Frontend: React, Axios, CSS
Backend: Express, Multer, Cloudinary SDK
Cloud Storage: Cloudinary
Middleware: CORS

📁 Folder Structure
React-file-upload-app/
├── backend/
│   ├── node_modules/
│   ├── index.js          # Express server with upload API
│   ├── package.json
│   ├── .env             # Cloudinary config secrets
├── frontend/
│   ├── node_modules/
│   ├── src/
│   │   ├── App.js       # React file upload component
│   │   ├── index.js
│   │   ├── App.css
│   ├── package.json
├── README.md
⚙️ Setup Instructions
Backend

Navigate to backend folder
cd backend

Install dependencies:
npm install express cors multer cloudinary multer-storage-cloudinary dotenv

Create .env file in backend folder with Cloudinary credentials:
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

Start the backend server:
node index.js

Frontend:
Navigate to frontend folder:
cd frontend

Install dependencies:
npm install react axios

Start the React app:
npm start

🖼️ Demo:

Live LInk : https://react-file-upload-app-1.onrender.com/

Select an image file (jpg, jpeg, png, gif)
Preview the selected image immediately
Click Upload button to upload to backend/Cloudinary
See upload progress bar update in real-time
After success, view the uploaded image and open the full image in a new tab

📬 Connect With Me:
LinkedIn: https://www.linkedin.com/in/gorav-gumber-9319a2342/
GitHub: https://github.com/Gauravg2630
Email: goravgumberg@gmail.com

