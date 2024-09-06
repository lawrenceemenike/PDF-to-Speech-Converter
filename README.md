# PDF to Speech Converter

Hey there! 👋 Welcome to my PDF to Speech Converter project. This nifty little app takes your PDFs and turns them into audio files.


## How It Works

1. **Backend**: Flask API that handles the heavy lifting.
2. **Frontend**: React app for a smooth user experience.
3. **Magic Sauce**: PyPDF2 for text extraction and pyttsx3 for text-to-speech conversion.

## Getting Started

### Backend Setup

1. Clone this repo
2. Set up a virtual environment (trust me, it's worth it)
3. Install the requirements:
   ```
   pip install flask flask-cors PyPDF2 pyttsx3
   ```
4. Run the Flask app:
   ```
   python main.py
   ```

### Frontend Setup

1. Navigate to the frontend directory
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React app:
   ```
   npm start
   ```

## Using the App

1. Open your browser and go to `http://localhost:3000`
2. Upload a PDF
3. Click "Upload and Convert"
4. Wait for the magic to happen
5. Listen to your PDF or download the audio file

## Troubleshooting

If something's not working right, here are a few things to check:

- Make sure both the backend and frontend are running
- Check if the PDF is readable (some PDFs are just stubborn)
- If you're getting weird errors, try restarting the Flask server

## What's Next?

I've got some ideas to make this even better:

- Support for more file types
- Custom voice options
- A progress bar for those chunky PDFs

Feel free to contribute or suggest new features!

## Shoutouts

Big thanks to the creators of Flask, React, PyPDF2, and pyttsx3. You folks rock!

---

Built with ☕ and 🐍 by Lawrence Emenike
