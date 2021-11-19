let mymodule=require('./log.js');
let mynewmodule=require('./calc')
mymodule.info("Information Started")
mymodule.warning("warning")
mymodule.error("Error occur ")
let x=50;
let y=10;
mynewmodule.add(x,y)
mynewmodule.sub(x,y)
mynewmodule.mult(x,y)
mynewmodule.div(x,y)