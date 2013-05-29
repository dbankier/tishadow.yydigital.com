import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

  val appName         = "TiShadow"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    // Add your project dependencies here,
    // actuarius
    "eu.henkelmann" % "actuarius_2.10.0" % "0.2.6",
    jdbc,
    anorm
  )

  val main = play.Project(appName, appVersion, appDependencies).settings(
    // Add your own project settings here      
  )

}
