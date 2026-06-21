pipeline {
    agent {
        node {
            label "linux"
        }
    }
    tools {
        nodejs 'NodeJs 22.14.0'
    }
    environment {
        HUB_PROTO = 'http'
        HUB_HOSTNAME = 'selenium-hub'
        HUB_PORT = '4444'
        HUB_PATH = '/wd/hub'
    }
    stages {
        stage("Build") {
            steps {

                script {
                    for (int i = 0; i < 10; i++) {
                        echo("Script ${i}")
                    }
                }

                echo("Start Build")
                sh("npm install")
                echo("Finish Build")
            }
        }
        stage("Test") {
            steps {

                script {
                    def data = [
                        "firstName" : "Dani",
                        "lastName" : "Yudistira"
                    ]
                    writeJSON(file: "data-json", json: data)
                }
                
                echo("Start Test")
                sh("npx wdio ./wdio.web.conf.ts --spec register-web.ts")
                echo("Finish Test")
            }
        }
    }
    post{
        always{
            echo "I will always say Hello again!"
        }
        success{
            echo "Yay, success"
        }
        failure{
            echo "Oh no, failure"
        }
        cleanup{
            echo "Don't care success or error"
        }
    }
}