'use strict'
const Post = use('App/Models/Post')
const slugify = require('slugify')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const posts = await Post.all();
    return posts;
  }

  /**
   * Create/save a new post.
   * POST posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const show = request.only([
      'title',
      'content',
      'draft'
    ])

    await Post.create(show)

    return response.status('200').json({
      status: 200,
      message: 'Created'
    })
  }

  /**
   * Display a single post.
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const { id } = params;
    const post = await Post.find(id);

    return response.status(200).json({
      status: 200,
      message: {
        post
      }
    })
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { id } = params;
    const post = await Post.find(id);

    const update = request.only([
      'title',
      'content',
      'draft'
    ]);

    await post.merge(update)

    await post.save();

    return response.status(200).json({
      status: 200,
      message: `Success Update.`
    })
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = params;
    const post = await Post.find(id)
    
    await post.delete()

    return response.status(200).json({
      status: '200',
      message: `Id: ${id} Deleted!`
    })
  }
}

module.exports = PostController
