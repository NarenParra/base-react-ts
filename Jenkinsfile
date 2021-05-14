pipeline {
	agent any

	tools {
		nodejs "NodeJS"
	}

	stages {
		stage('Preparation') {
			steps {
      			echo "Will deploy to ${NAME_APP}"
				sh 'rm -Rf .git/'
			}
		}
        stage('Build npmrc') {
          	steps {
				sh 'npm run npmrc'	  
          	}
       	}
		stage('Build') {
          	steps {
			 	sh 'npm install'
		        sh 'npm install --only-dev'
		  	 	sh 'npm run build'	  
          	}
       	}
		stage('Test') {
            steps {
                sh 'npm run test -- -u'
            }
        }	   
        stage('Sonarqube') {
            steps {
                sh 'npm run sonar'
            }
        }
		stage('Clean') {
            steps {
            	sh 'rm -Rf node_modules/'
            }
        }
		stage('Create  Manifest') {
			steps {
				sh "python2.7 script.py"
				sh "ls -la"
			}
		}
		stage('Deploy') {
			steps {
				pushToCloudFoundry(
					target: "${PIVOTAL_URI}",
					organization: "${PIVOTAL_ORGANIZATION}",
					cloudSpace: "${PIVOTAL_TARGET}",
					credentialsId: "${PIVOTAL_CREDENTIALS}",
					selfSigned: 'true',
					pluginTimeout: "600",
					manifestChoice: [
						manifestFile: './manifest.yml'
					]
				)
			}
		}
	}
}