const Article = require('../model/article')
const Category = require('../model/caterogyArt')
const User = require('../model/user')
var fs = require('fs')

module.exports = {
  /**
   * Article
   */
  crArticle: async (title, sapo, content, author, image, imageEditor, category) => {
    var increArt = new Article()
    increArt.sapo = sapo
    increArt.title = title
    increArt.author = author
    increArt.content = content
    increArt.image = image
    increArt.imagesEditor = imageEditor.split(',')
    increArt.category = category
    console.log(increArt)
    increArt.save()
    // console.log('Save Complete Article: ' + increArt)
    return { status: 200 }
  },
  listArticle: async () => { // many error
    let getListRef = Article.find({}).sort({ date: 'desc' })
    let getListUserRef = User.find()
    const values = await Promise.all([getListRef, getListUserRef])
    const getList = values[0]
    const getListUser = values[1]

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
    let article = await Article.findOne({ _id: id })
    let getListUser = await User.find()
    let ListUser = {} // Push inside List with Primary Key
    for (let item of getListUser) {
      ListUser[item._id] = item
    }// Save Object with key : value || Key is Id_User
    let idUser = article.author
    article.author = ListUser[idUser].username // Change ID is name
    let avatar = ListUser[idUser].avatar
    // console.log(avatar)
    return { article, avatar }
  },
  getListUser: async () => {
    let getListUser = await User.find()
    return getListUser
  },
  removePostAriticle: async (idPost) => {
    /**
     * Config Path and Get Data
     */
    let arti = await Article.findOne({ _id: idPost })
    console.log(arti)
    if (arti !== null) {
      let imagesEditor = arti.imagesEditor
      let imagemain = arti.image
      let path = __dirname.slice(0, -15)
      let pImgMain = path + '/public' + imagemain
      /**
       * Remove Files
       */
      if (imagemain.length > 0) {
        await fs.unlink(pImgMain, (err) => {
          if (err) {
            console.log('Delete is Faile: ' + err)
          }
        })
      }
      if (imagesEditor.length > 0) {
        imagesEditor.map(item => {
          fs.unlinkSync(path + '/public' + item)
        })
      }
      return Article.deleteOne({ _id: idPost }, (err, res) => {
        if (err) return err
        const response = {
          status: 200,
          message: 'Todo successfully deleted',
          id: res._id
        }
        return { response }
      })
    }
    return { status: 404, message: 'Not Found id' }
  }
}
