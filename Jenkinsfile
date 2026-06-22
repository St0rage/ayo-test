pipeline {
    // agent {
    //     node {
    //         label "linux"
    //     }
    // }
    agent none
    tools {
        nodejs 'NodeJs 22.14.0'
    }
    // environment {
    //     HUB_PROTO = ${SELENIUM_HUB_PROTO}
    //     HUB_HOSTNAME = ${SELENIUM_HUB_HOSTNAME}
    //     HUB_PORT = ${SELENIUM_HUB_PORT}
    //     HUB_PATH = ${SELENIUM_HUB_PATH}
    // }
    stages {
        stage("Build") {
            agent {
                node {
                    label "linux"
                }
            }
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
            agent {
                node {
                    label "linux"
                }
            }
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
        stage("Deploy") {
            agent {
                node {
                    label "linux"
                }
            }
            steps{
                echo("Hello Deploy 1")
                sleep(5)
                echo("Hello Deploy 2")
                echo("Hello Deploy 3")
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