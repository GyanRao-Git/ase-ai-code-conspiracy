exports.getHome = (req, res, next) => {
  res.render("home", {
    pageTitle: "Welcome"
  })
}

exports.getGame=(req,res,next)=>{
  res.render("gameRound1C1",{
    pageTitle:"Secret code extraction" 
  })
}

exports.getGame2 = (req, res, next) => {
  res.render("gameRound1C2", {
    pageTitle: "Secret code extraction"
  })
}

exports.getGame3 = (req, res, next) => {
  res.render("gameRound1C3", {
    pageTitle: "Secret code extraction"
  })
}

exports.getGame4 = (req, res, next) => {
  res.render("gameRound1C4", {
    pageTitle: "Secret code extraction"
  })
}

exports.getGame5 = (req, res, next) => {
  res.render("gameRound1C5", {
    pageTitle: "Secret code extraction"
  })
} 

exports.getGame6 = (req, res, next) => {
  res.render("gameRound1C6", {
    pageTitle: "Secret code extraction"
  })
}

exports.getGame7 = (req, res, next) => {
  res.render("gameRound1C7", {
    pageTitle: "Secret code extraction"
  })
}

exports.getGame8 = (req, res, next) => {
  res.render("gameRound1C8", {
    pageTitle: "Secret code extraction"
  })
}

exports.getGame9 = (req, res, next) => {
  res.render("gameRound1C9", {
    pageTitle: "Secret code extraction"
  })
}

exports.getGame10 = (req, res, next) => {
  res.render("gameRound1C10", {
    pageTitle: "Secret code extraction"
  })
}

exports.getGameRound2 = (req, res, next) => {
  res.render("gameRound2", {
    pageTitle: "Image Correction using AI"
  })
}

exports.getRules=(req,res,next)=>{
  res.render("rules.ejs",{
    pageTitle: "Rules"
  })
}