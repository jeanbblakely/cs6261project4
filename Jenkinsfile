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
                sh 'docker run -it -d -p 4200:4200 -v $WORKSPACE:/work/cs6261project4 --name testcontainer testimage:latest'
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
            sh 'docker stop testcontainer || true'
            sh 'docker rm testcontainer || true'
            sh 'docker rmi testimage || true'
        }
    }
}
