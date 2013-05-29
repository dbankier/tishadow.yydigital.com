import play.api._
import models._
import java.io.File

object Global extends GlobalSettings {

  override def onStart(app: Application) {
    for (file <- new File(Config.sections_path).listFiles.sortBy(identity)) {
      Sections.add(file.getName())
    }
  }
}
