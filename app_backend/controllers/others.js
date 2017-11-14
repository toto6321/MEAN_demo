/**
 *   @author toto
 *   @createdDate    2017-11-09 11:22 PM
 *   @email  toto6321@qq.com
 */

module.exports.about=(request,response,next)=>{
    response.render('generic-text',{
        title:'about'
    })
}
