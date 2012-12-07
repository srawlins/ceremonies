
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index',
      {
        title: 'Ceremonies',
        available_ceremonies: [
          { code: "DI-003",
            summary: "Initiate a DI",
            detail: ""
          },
          { code: "DV-001",
            summary: "Initiate DVs",
            detail: "with all of the different Payment Reasons and print coversheets"
          }
        ]
      });
};
