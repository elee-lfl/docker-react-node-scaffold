class SampleRoutes {

  static helloWorld(req, res) {
    const siteTitle = req.body.siteTitle;

    res.send({
      welcomeMessage: `Welcome to ${siteTitle}`,
    });
  }

}

export default SampleRoutes;
