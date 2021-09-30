const City = require('../../src/app/Models/City')
const mongoose = require('mongoose')

describe('Import', () => {
  beforeAll(async () => {
    if (!process.env.MONGO_URL) {
      throw new Error('Mongo server not initialized')
    }

    await mongoose.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await mongoose.connection.close()
  })
  beforeEach(async () => {
    await City.deleteMany({})
  })

  it('has a module', () => {
    expect(City).toBeDefined()
  })

  it('get cityByName', async () => {
    await City.create({ name: 'Pelotas', state: 'RS' })

    const cityInsert = await City.findOne({ name: 'Pelotas' })

    const expected = 'Pelotas'
    const actual = cityInsert.name

    expect(actual).toEqual(expected)
  })

  it('get cityByState', async () => {
    await City.create({ name: 'Pelotas', state: 'RS' })

    const cityInsert = await City.findOne({ state: 'RS' })

    const expected = 'RS'
    const actual = cityInsert.state

    expect(actual).toEqual(expected)
  })

  it('insert city', async () => {
    await City.create({ name: 'Pelotas', state: 'RS' })

    const cityInsert = await City.findOne({ name: 'Pelotas' })

    const expected = 'Pelotas'
    const actual = cityInsert.name

    expect(actual).toEqual(expected)
  })

  it('update city', async () => {
    const cityCreate = await City.create({ name: 'Pelotas', state: 'RS' })

    const { _id } = cityCreate
    const dadosNew = { name: 'Rio Grande', state: 'RS' }

    const cityUpdate = await City.findByIdAndUpdate(_id.toString(), dadosNew, { new: true })

    const expected = 'Rio Grande'
    const actual = cityUpdate.name
    expect(actual).toEqual(expected)
  })

  it('delete city', async () => {
    const cityCreate = await City.create({ name: 'Pelotas', state: 'RS' })

    const { _id } = cityCreate

    await City.findByIdAndRemove(_id.toString())
    const checkcity = await City.find({ id: _id.toString() })

    expect(checkcity).toEqual([])
  })
})
