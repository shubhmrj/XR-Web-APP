# XR Chemistry Lab - PythonAnywhere Deployment Guide

## Your Setup Details
- **PythonAnywhere Username:** XRCHEMLAB
- **GitHub Repository:** https://github.com/shubhmrj/XR-Web-APP
- **Web App URL:** https://xrchemlab.pythonanywhere.com
- **Dashboard:** https://www.pythonanywhere.com/user/XRCHEMLAB/webapps/

## Prerequisites ✅
1. GitHub account with your code repository ✅
2. PythonAnywhere account ✅

## Step-by-Step Deployment Process

### 1. Clone Repository in PythonAnywhere
In the PythonAnywhere bash console:
```bash
cd ~
git clone https://github.com/shubhmrj/XR-Web-APP.git
cd XR-Web-APP
```

### 2. Install Dependencies
```bash
pip3.10 install --user -r requirements.txt
```

### 3. Configure Web App Settings
In your PythonAnywhere Web tab (https://www.pythonanywhere.com/user/XRCHEMLAB/webapps/):

**Source Code:**
```
/home/XRCHEMLAB/XR-Web-APP
```

**WSGI Configuration File:**
```
/home/XRCHEMLAB/XR-Web-APP/wsgi.py
```

**Python Version:** Python 3.10

### 4. Configure Static Files
In the Web tab, add static file mappings:
- **URL:** `/static/`
- **Directory:** `/home/XRCHEMLAB/XR-Web-APP/static/`

### 5. Environment Variables (Optional)
In the Web tab, you can add environment variables:
- **SECRET_KEY:** xr-chem-lab-secret-key-2024

### 6. Reload Web App
Click the green "Reload" button in the Web tab.

## 🎉 Your app will be available at:
**https://xrchemlab.pythonanywhere.com**

## Future Updates
To update your deployed app:
1. Push changes to GitHub
2. In PythonAnywhere bash console:
   ```bash
   cd ~/XR-Web-APP
   git pull origin main
   ```
3. Reload the web app from the Web tab

## Troubleshooting
- Check error logs in the Web tab
- Ensure all file paths use forward slashes
- Verify Python version compatibility
- Check that all dependencies are installed
