# Gemini API Key Setup

## How to Add Your API Key

1. Open the `.env` file in the root of the project
2. Replace `your_api_key_here` with your actual Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_actual_gemini_api_key_here
   ```
3. Save the file
4. Restart the development server (stop with Ctrl+C and run `npm run dev` again)

## Getting a Gemini API Key

If you don't have a Gemini API key yet:
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Get API Key" or "Create API Key"
4. Copy the generated key and paste it in your `.env` file

## Security Note

- The `.env` file is gitignored and will not be committed to version control
- Never share your API key publicly or commit it to Git
- Keep your `.env` file secure and private
