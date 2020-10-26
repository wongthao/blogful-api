

const ArticlesService = {
    //like the 3 option we are passing the knex instance as an argument
    getAllArticles(knex) {
          return knex.select('*').from('blogful_articles')
    },
    insertArticle(knex, newArticle) {
         return knex
           .insert(newArticle)
           .into('blogful_articles')
           .returning('*')
           .then(rows => {
                return rows[0]
           })
    },
    getById(knex, id) {
          return knex.from('blogful_articles').select('*').where('id', id).first()
     },

     
     // the delete method uses the knex instance to access the blogful_articles database.(which has the 3 articles) Then it finds where the id is located and deletes it. 
    deleteArticle(knex, id) {
       return knex('blogful_articles')
         .where({ id })
         .delete()
    }, 


    updateArticle(knex, id, newArticleFields) {
            return knex('blogful_articles')
              .where({ id })
              .update(newArticleFields)
    },
}

module.exports = ArticlesService

