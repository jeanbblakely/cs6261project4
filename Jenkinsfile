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
                echo 'Not yet implemented'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Not yet implemented'
            }
        }
    }
}
