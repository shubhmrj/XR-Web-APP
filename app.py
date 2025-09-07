from flask import Flask, render_template, request, redirect, url_for, flash, send_file
import os
from datetime import datetime
import json
import os

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'xr-chem-lab-secret-key-2024')

# In-memory storage for issues (in production, use a database)
issues = []
downloads = [
    {
        'version': 'v1.2.0',
        'date': '2024-01-15',
        'platform': 'Meta Quest 2/3/Pro',
        'file_size': '245 MB',
        'download_link': '#',
        'changelog': [
            'Enhanced gesture recognition accuracy',
            'Added new acid-base reaction experiments',
            'Improved UI/UX for better accessibility',
            'Fixed stability issues on Quest 3'
        ]
    },
    {
        'version': 'v1.1.0',
        'date': '2023-12-10',
        'platform': 'Android AR',
        'file_size': '180 MB',
        'download_link': '#',
        'changelog': [
            'Added mobile AR support',
            'Optimized performance for smartphones',
            'New tutorial system',
            'Bug fixes and improvements'
        ]
    },
    {
        'version': 'v1.0.0',
        'date': '2023-11-01',
        'platform': 'Windows VR',
        'file_size': '320 MB',
        'download_link': '#',
        'changelog': [
            'Initial release',
            'Core gesture control system',
            'Basic chemistry experiments',
            'Educational tutorial mode'
        ]
    }
]

experiments_demo = [
    {
        'title': 'Acid-Base Titration',
        'description': 'Learn to perform precise titrations using hand gestures to control burette flow and observe color changes with pH indicators.',
        'difficulty': 'Intermediate',
        'duration': '15-20 minutes',
        'gestures': ['Pinch to select', 'Pour gesture', 'Stir motion'],
        'image': 'acid_base.jpg'
    },
    {
        'title': 'Flame Test Analysis',
        'description': 'Identify unknown metal ions by observing characteristic flame colors when heated with a Bunsen burner.',
        'difficulty': 'Beginner',
        'duration': '10-15 minutes',
        'gestures': ['Ignite gesture', 'Grab & manipulate'],
        'image': 'flame_test.jpg'
    },
    {
        'title': 'Precipitation Reactions',
        'description': 'Mix different solutions to observe the formation of insoluble compounds and understand solubility rules.',
        'difficulty': 'Intermediate',
        'duration': '12-18 minutes',
        'gestures': ['Pour gesture', 'Stir motion', 'Scale gesture'],
        'image': 'precipitation.jpg'
    },
    {
        'title': 'Electrochemistry Cell',
        'description': 'Build and test electrochemical cells to understand oxidation-reduction reactions and electron flow.',
        'difficulty': 'Advanced',
        'duration': '20-25 minutes',
        'gestures': ['Pinch to select', 'Rotate gesture', 'Grab & manipulate'],
        'image': 'electrochemistry.jpg'
    }
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/features')
def features():
    return render_template('features.html')

@app.route('/download')
def download():
    return render_template('download.html', downloads=downloads)

@app.route('/demos')
def demos():
    return render_template('demos.html', experiments=experiments_demo)

@app.route('/gestures')
def gestures():
    return render_template('gestures.html')

@app.route('/issues')
def issues_page():
    return render_template('issues.html', issues=issues)

@app.route('/submit_issue', methods=['POST'])
def submit_issue():
    if request.method == 'POST':
        issue = {
            'id': len(issues) + 1,
            'title': request.form['title'],
            'description': request.form['description'],
            'category': request.form['category'],
            'priority': request.form['priority'],
            'reporter': request.form['reporter'],
            'email': request.form['email'],
            'date': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            'status': 'Open'
        }
        issues.append(issue)
        flash('Issue submitted successfully! We\'ll review it soon.', 'success')
        return redirect(url_for('issues_page'))

@app.route('/documentation')
def documentation():
    return render_template('documentation.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/download-apk')
def download_apk():
    try:
        # Path to your APK file
        apk_path = os.path.join(os.getcwd(), 'grabIntetractionGUI 110.apk')
        
        if os.path.exists(apk_path):
            return send_file(
                apk_path,
                as_attachment=True,
                download_name='XR_Chemistry_Lab_v2.1.0.apk',
                mimetype='application/vnd.android.package-archive'
            )
        else:
            flash('APK file not found. Please contact support.', 'error')
            return redirect(url_for('download'))
    except Exception as e:
        flash('Error downloading APK. Please try again later.', 'error')
        return redirect(url_for('download'))

@app.route('/api/issues')
def api_issues():
    return json.dumps(issues)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
