package models

import scala.io.Source
import eu.henkelmann.actuarius.ActuariusTransformer


case class Section(file:String) {
  val full_path = Config.sections_path + file
  val markdown = Source.fromFile(full_path).getLines.mkString("\n")
  val html = new ActuariusTransformer()(markdown).replaceAll("""<h3>(.*?)</h3>""","<p class=\"content\" id=\"$1\"/><h3>$1</h3>")
  val headings = """<h3.*?>(.*?)</h3>""".r.findAllIn(html).matchData.toList.map(_.group(1))
}

object Sections {
  
  var sections = new scala.collection.immutable.ListMap[String, Section]

  def getNames = sections.keys.toList
  def add(file:String) = sections += (file.split("_").drop(1).mkString(" ").replaceAll(".md","") -> Section(file))
  def get(name:String) = sections.get(name)
  def getHtml(name:String) = sections.get(name).map(_.html)
}
