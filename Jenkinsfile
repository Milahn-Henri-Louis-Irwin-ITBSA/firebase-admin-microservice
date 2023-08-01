pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git(url: 'https://github.com/Milahn-Henri-Louis-Irwin-ITBSA/firebase-admin-microservice', branch: 'main')
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'yarn install'
            }
        }

        stage('Build') {
            steps {
                sh 'yarn prod'
            }
        }

        stage('Deploy') {
            steps {
                // Create the directory '/root/microservices/firebase-admin-service' if it doesn't exist
                sh 'mkdir -p /root/microservices/firebase-admin-service'

                // Move the 'dist' directory to '/root/microservices/firebase-admin-service'
                sh 'mv dist /root/microservices/firebase-admin-service'

                // Move the 'node_modules' directory to '/root/microservices/firebase-admin-service'
                sh 'mv node_modules /root/microservices/firebase-admin-service'
            }
        }
    }
}
