'use strict'
const User = use('App/Models/User')
class UserController {

async store({request}) {
  const { email, password,username } = request.all()
  const user = await User.create({email,password,username})
  return user

}

  async login ({ request, auth, view, response }) {
    if(request.method() === 'GET') {
      return view.render('frontend/login/login')
    }
    //return User.all()
    const { email, password } = request.all()
    await auth.attempt(email, password)
    return response.redirect("/backend/dashboard")
  }

  async logout({auth,response}) {
    await auth.logout()
    return response.redirect("/")
  }

  async register({view}) {
    return view.render('frontend/login/create')
  }
}

module.exports = UserController
