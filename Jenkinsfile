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
    environment {
        AUTHOR = "Dani Yudistira Maulana"
    }
    // triggers {
    //     cron("*/5 * * * *")
    //     poolSCM("*/5 * * * *")
    //     upstream(upstream: 'job1,job2', threshold: hudson.model.Result.SUCCESS)
    // }
    parameters {
        string(name: "NAME", defaultValue: "Guest", description: "What is your name")
        text(name: "DESCRIPTION", defaultValue: "Guest", description: "Tell me about you")
        booleanParam(name: "DEPLOY", defaultValue: false, description: "Need to Deploy?")
        choice(name: "SOCIAL_MEDIA", choices: ['Instagram', 'Facebook', 'TikTok'], description: "Which Social Media")
        password(name: "SECRET", defaultValue: "", description: "Encrypt Key")
    }
    options {
        disableConcurrentBuilds()
        timeout(time: 10, unit: 'MINUTES')
    }
    stages {
        stage("OS Setup") {
            matrix {
                axes {
                    axis {
                        name "OS"
                        values "linux", "windows", "mac"
                    }
                    axis {
                        name "ARCH"
                        values "32", "64"
                    }
                }
            }
            stages {
                stage("OS Setup") {
                    agent {
                        node {
                            label "linux"
                        }
                    }
                    steps {
                        echo()"Setup ${OS} : ${ARC}")
                    }
                }
            }
        }
        stage("Preparation") {
            parallel {
                stage("Prepare Java") {
                    agent {
                        node {
                            label "linux"
                        }
                    }
                    steps {
                        echo("Prepare Java")
                        sleep(5)
                    }
                }
                stage("Prepare Maven") {
                    agent {
                        node {
                            label "linux"
                        }
                    }
                    steps {
                        echo("Prepare Maven")
                        sleep(5)
                    }
                }
            }
        }
        stage("Paremeter") {
            agent {
                node {
                    label "linux"
                }
            }
            steps {
                echo("Hello ${params.NAME}")
                echo("You description is ${params.DESCRIPTION}")
                echo("Your social media is ${params.SOCIAL_MEDIA}")
                echo("Need to deploy : ${params.DEPLOY} to deploy!")
                echo("Your secret is ${params.SECRET}")
            }
        }

        stage("Prepare") {
            environment {
                APP = credentials("dani_rahasia")
            }
            agent {
                node {
                    label "linux"
                }
            }
            steps {
                echo("Author ${AUTHOR}")
                echo("Start Job : ${env.JOB_NAME}")
                echo("Start Build : ${env.BUILD_NUMBER}")
                echo("Branch Name : ${env.BRANCH_NUMBER}")
                echo("App User : ${APP_USR}")
                echo("App Password : ${APP_PSW}")
                sh('echo "App Password : ${APP_PSW}" > "rahasia.txt"')
            }
        }
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
                sh("npx wdio ./wdio.web.conf.ts --spec jenkins-test.ts")
                echo("Finish Test")
            }
        }
        stage("Deploy") {
            input {
                message "Can we deploy?"
                ok "Yes, of course"
                submitter "tars,dani"
                parameters {
                    choice(name: "TARGET_ENV", choices: ["DEV", "QA", "PROD"], description: "Which environment")
                }
            }
            agent {
                node {
                    label "linux"
                }
            }
            steps{
                echo("Deploy to ${TARGET_ENV}")
            }
        }
        stage("Release") {
            when {
                expression {
                    return params.DEPLOY
                }
            }
            agent {
                node {
                    label "linux"
                }
            }
            steps{
                echo("Release it")
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