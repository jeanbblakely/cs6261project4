pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                sh 'ng test'
                echo 'Testing..'
            }
        }
        stage('e2e') {
            steps {
                sh 'docker build --tag testimage:latest .'
                sh 'docker run -it -d -p 4200:4200 -v /$WORKSPACE:/work/cs6261project4/app --name testcontainer testimage:latest'
                sh './node_modules/protractor/bin/webdriver-manager update'
                sh 'ng e2e --devServerTarget='

            }
        }
        stage('Deploy') {
            steps {
                echo 'Not yet implemented'
            }
        }
    }
    
    post {
        cleanup {
            steps {
                sh 'docker rm testcontainer || true'
                sh 'docker rm testimage:latest || true'
            }
        }
    }
}
