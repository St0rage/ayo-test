pipeline {
    agent {
        node {
            label "linux"
        }
    }
    stages {
        stage("Build") {
            steps {
                echo("Start Build")
                sh("npm install")
                echo("Finish Build")
            }
        }
        stage("Test") {
            steps {
                echo("Start Test")
                sh("export HUB_PROTO=http")
                sh("export HUB_HOSTNAME=selenium-hub")
                sh("export HUB_PORT=4444")
                sh("export HUB_PATH='/wd/hub'")
                sh("npx wdio ./wdio.web.conf.ts")
                echo("Finish Test")
            }
        }
        stage("Deploy") {
            steps {
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