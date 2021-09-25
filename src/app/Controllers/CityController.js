class CityController {
  index (req, res) {
    console.log(req.body)
  }

  show (req, res) {
    const citys = ['pelotas', 'rio grande']
    return res.status(200).json({
      error: false,
      citys
    })
  }
}
module.exports = new CityController()
