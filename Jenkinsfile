pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Docker build command
                    sh 'docker build -t my-app:latest .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Docker run command for tests
                    sh 'docker run my-app:latest test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Docker commands to deploy the application
                    sh 'docker run -d -p 80:80 my-app:latest'
                }
            }
        }
    }
}