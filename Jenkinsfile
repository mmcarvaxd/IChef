agent any
      environment {
         PATH='/usr/local/bin:/usr/bin:/bin'
      }
   stages {
      stage('NPM Setup') {
      steps {
         sh 'nvm use 8 && npm install'
      }
   }

   stage('IOS Build') {
   steps {
      sh 'ionic cordova build ios --release'
     } 
  }

   stage('Android Build') {
   steps {
      sh 'ionic cordova build android --release'
   }
  }

   stage('Publish iOS') {
      steps {
       echo "Publish iOS Action"
    }
   }

   stage('Publish Android') {
     steps {
    echo "Publish Android API Action"
   }
  }

 }
}