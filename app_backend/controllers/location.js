/**
 *   @author toto
 *   @createdDate    2017-11-09 11:10 PM
 *   @email  toto6321@qq.com
 */
module.exports.homelist = function(request, response, next){
    response.render('index', {
        title: 'homelist'
    })
}

module.exports.locationInfo = (request, response, next) => {
    response.render('index', {
        title: 'locationInfo'
    })
}

module.exports.addReview = (request,response,next)=>{
    response.render('index',{
        title:'addReview'
    })
}