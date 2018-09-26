const Article = require('../model/article')
const Category = require('../model/caterogyArt')
const User = require('../model/user')

module.exports = {
  /**
   * Article
   */
  crArticle: async (title, sapo, content, author, image, category) => {
    var increArt = new Article()
    increArt.sapo = sapo
    increArt.title = title
    increArt.author = author
    increArt.content = content
    increArt.image = image
    increArt.category = category
    // console.log(increArt)
    increArt.save()
    console.log('Save Complete Article: ' + increArt)
    return { status: 200 }
  },
  listArticle: async () => { // many error
    let getList = await Article.find({}).sort({ date: 'desc' })
    let getListUser = await User.find()

    let ListUser = {} // Push inside List with Primary Key
    for (let item of getListUser) {
      ListUser[item._id] = item
    }
    getList.map(item => {
      let id = item.author
      item.author = ListUser[id].username
      return item
    })
    return getList
  },
  /**
   * Category
   */
  crCaterogy: async () => {
    var increCate = new Category()
    increCate.name = 'Photograph'
    increCate.save()
    console.log('Save Complete Type: ' + increCate)
  },
  Categorys: async () => {
    var getList = await Category.find({})
    // console.log(getList)
    return getList
  },
  /**
   * Get Detail Article
   */
  detailAricle: async (id) => {
    let article = await Article.findOne({_id: id})
    let getListUser = await User.find()
    let ListUser = {} // Push inside List with Primary Key
    for (let item of getListUser) {
      ListUser[item._id] = item
    }// Save Object with key : value || Key is Id_User
    let idUser = article.author
    article.author = ListUser[idUser].username // Change ID is name
    return article
  }
}
