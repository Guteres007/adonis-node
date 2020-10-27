'use strict'

const Post = use('App/Models/Post')

const { validate } = use('Validator')

class PostController {
    async create({view}) {
      const posts = await Post.all()
       //return posts.toJSON()

      return await view.render('backend.posts.create', {posts: posts.toJSON()} )
    }

    async store({request, response, session}) {
      const data = request.only(['title', 'body'])

      const rules = {
        title: 'required'
      }

      const validation = await validate(data, rules)

      if ( validation.fails() ) {
        session
          .withErrors(validation.messages())
          .flashExcept(['password'])
        return response.redirect('back')
      }

      await Post.create(data)
      return response.redirect('back')
    }

    async destroy({params, response}) {
        let post = await Post.find(params.id)
        console.log(await post.delete())
        return response.redirect('back')
    }
}

module.exports = PostController
