const models = require('../models');

module.exports ={
  addNewNote: function(req){
      let data ={
          userId:req.body.userId,
          title: req.body.title,
          text: req.body.text
      };

      return models.notes.create(data)
          .catch(e=>Promise.reject(e))
  }
};