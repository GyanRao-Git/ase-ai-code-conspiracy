exports.get404=(req,res,next)=>{
  res.status(404).render("404page",{
    pageTitle:"Page Not Found!"
  })
}