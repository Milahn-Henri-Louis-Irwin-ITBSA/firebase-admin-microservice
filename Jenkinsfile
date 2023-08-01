pipeline {
agent any
stages {
stage('Checkout') {
steps {
git(url: 'https://github.com/Milahn-Henri-Louis-Irwin-ITBSA/firebase-admin-microservice', branch: 'main')
}
}
stage('Build') {
steps {
yarn prod
}
}
stage('Deploy') {
steps {
sh 'cp -r dist /root/microservices/firebase-admin-service'
}
}
}
}