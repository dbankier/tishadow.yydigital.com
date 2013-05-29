package controllers

import play.api._
import play.api.mvc._
import models.{Section, Sections}

object Application extends Controller {
  
  def index = Action {
    Ok(views.html.index(Sections.getNames))
  }

  def section(name:String) = Action {
    Sections.get(name) match {
      case Some(section) => Ok(views.html.section(Sections.getNames, name, section))
      case None => Redirect(controllers.routes.Application.index)
    }
  }
  
}
