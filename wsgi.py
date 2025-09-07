#!/usr/bin/python3.10

import sys
import os

# Add your project directory to sys.path
project_home = '/home/XRCHEMLAB/XR-Web-APP'
if project_home not in sys.path:
    sys.path = [project_home] + sys.path

from app import app as application

if __name__ == "__main__":
    application.run()
