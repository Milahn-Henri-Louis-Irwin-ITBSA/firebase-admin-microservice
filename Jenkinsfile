pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                // Check out the code from the repository
                git 'https://github.com/Milahn-Henri-Louis-Irwin-ITBSA/firebase-admin-microservice'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies using yarn
                sh 'yarn install'
            }
        }

        stage('Build') {
            steps {
                // Run the build command using yarn
                sh 'yarn prod'
            }
        }

        // Add more stages as needed for deployment, etc.
    }
}
