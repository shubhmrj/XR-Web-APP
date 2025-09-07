# XR Chemistry Lab - PythonAnywhere Deployment Guide

## Prerequisites
1. GitHub account with your code repository
2. PythonAnywhere account (free tier available)

## Step-by-Step Deployment Process

### 1. Push to GitHub
First, ensure your code is in a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit for XR Chemistry Lab"
git remote add origin https://github.com/yourusername/XR-Chem-Lab.git
git push -u origin main
```

### 2. PythonAnywhere Setup
1. Sign up at [pythonanywhere.com](https://www.pythonanywhere.com)
2. Go to your Dashboard
3. Open a Bash console

### 3. Clone Repository
In the PythonAnywhere bash console:
```bash
cd ~
git clone https://github.com/yourusername/XR-Chem-Lab.git
cd XR-Chem-Lab
```

### 4. Install Dependencies
```bash
pip3.10 install --user -r requirements.txt
```

### 5. Configure Web App
1. Go to Web tab in PythonAnywhere dashboard
2. Click "Add a new web app"
3. Choose "Manual configuration"
4. Select Python 3.10
5. Set source code directory: `/home/yourusername/XR-Chem-Lab`
6. Set WSGI configuration file: `/home/yourusername/XR-Chem-Lab/wsgi.py`

### 6. Update WSGI File
Edit the wsgi.py file to replace `yourusername` with your actual PythonAnywhere username.

### 7. Configure Static Files
In the Web tab, add static file mappings:
- URL: `/static/`
- Directory: `/home/yourusername/XR-Chem-Lab/static/`

### 8. Environment Variables
In the Web tab, add environment variables if needed:
- SECRET_KEY: your-secret-key-here

### 9. Reload Web App
Click "Reload" button in the Web tab.

## Your app will be available at:
`https://yourusername.pythonanywhere.com`

## Future Updates
To update your deployed app:
1. Push changes to GitHub
2. In PythonAnywhere bash console:
   ```bash
   cd ~/XR-Chem-Lab
   git pull origin main
   ```
3. Reload the web app from the Web tab

## Troubleshooting
- Check error logs in the Web tab
- Ensure all file paths use forward slashes
- Verify Python version compatibility
- Check that all dependencies are installed
