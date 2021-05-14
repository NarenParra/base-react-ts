pipeline {
	agent any

	triggers {
        pollSCM('@hourly')
	}

	options {
			buildDiscarder(logRotator(numToKeepStr: '5'))
			disableConcurrentBuilds()
	}
		

	stages {
		stage('Checkout') {
				steps {
                echo '------------>Checkout desde Git Microservicio<------------'
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [], gitTool: 'Default' , submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'GITHUB_NarenParra', url: 'https://github.com/NarenParra/base-react-ts.git']]])
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
		/* stage('Deploy') {
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
		} */
		post {
			failure {
				mail(to: 'naren21p@GMAIL.com',
				body:"Build failed in Jenkins: Project: ${env.JOB_NAME} Build /n Number: ${env.BUILD_NUMBER} URL de build: ${env.BUILD_NUMBER}/n/nPlease go to ${env.BUILD_URL} and verify the build",
				subject: "ERROR CI: ${env.JOB_NAME}")
			}
		}	
	}
}