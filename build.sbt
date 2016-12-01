
lazy val reafPrintDomServer = (project in file(".")).
  settings(commonSettings: _*).
  settings(
    name := "reaf-print-dom-server",
    libraryDependencies ++= Seq(
      ws,
      cache,
      specs2 % Test
    ),
    unmanagedResourceDirectories in Assets += baseDirectory.value / "static"
  ).
  enablePlugins(PlayScala)

lazy val jvmOptions = Seq("-Djava.library.path=./lib")

lazy val javaCompileOptions = Seq("-encoding", "UTF-8")

lazy val commonSettings = Seq(
  organization := "com.xjy",
  version := "16.10.1",
  scalaVersion := "2.11.8",
  javaOptions in run ++= jvmOptions,
  javaOptions in Test ++= jvmOptions,
  javacOptions ++= javaCompileOptions,
  doc in Compile <<= target.map(_ / "none")
)
